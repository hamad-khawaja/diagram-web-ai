import type { NextApiRequest, NextApiResponse } from 'next';
import { getCognitoJwt, getCachedJwt } from '../../lib/cognitoAuth';
import RATE_LIMIT from '../../lib/ipRateLimitStore';

// This API route proxies requests to the AWS API Gateway, handling Cognito auth server-side
const MAX_REQUESTS = 3;
const WINDOW_MS = 12 * 60 * 60 * 1000; // 12 hours
const EXEMPT_IP = process.env.EXEMPT_RATE_LIMIT_IP;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get client IP (works for Vercel/Next.js API routes, may need adjustment for proxies)
  const ip =
    req.headers['x-forwarded-for']?.toString().split(',')[0].trim() ||
    req.socket.remoteAddress ||
    'unknown';

  // Debug log for IP and rate limit entry
  console.log('Client IP:', ip, 'RateLimit:', RATE_LIMIT[ip]);

  // Skip rate limiting for exempt IP ??
  if (EXEMPT_IP && ip === EXEMPT_IP) {
    console.log('Rate limiting skipped for exempt IP:', ip);
  } else {
    const now = Date.now();
    const entry = RATE_LIMIT[ip];
    if (entry) {
      if (now - entry.firstRequest < WINDOW_MS) {
        if (entry.count >= MAX_REQUESTS) {
          const wait = Math.ceil((WINDOW_MS - (now - entry.firstRequest)) / (60 * 60 * 1000));
          // Debug log for rate limit exceeded
          console.log('Rate limit exceeded for IP:', ip);
          res.status(429).json({ error: `Rate limit exceeded. Try again in ${wait} hour(s).` });
          return;
        } else {
          entry.count += 1;
        }
      } else {
        // Reset window
        entry.count = 1;
        entry.firstRequest = now;
      }
    } else {
      RATE_LIMIT[ip] = { count: 1, firstRequest: now };
    }
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { description, provider } = req.body;
  if (!description || !provider) {
    return res.status(400).json({ error: 'Missing description or provider' });
  }

  let jwt = getCachedJwt();
  if (!jwt) {
    const username = process.env.NEXT_PUBLIC_COGNITO_USERNAME;
    const password = process.env.NEXT_PUBLIC_COGNITO_PASSWORD;
    if (!username || !password) {
      return res.status(500).json({ error: 'Cognito credentials not set' });
    }
    try {
      jwt = await getCognitoJwt(username, password);
    } catch (err: any) {
      return res.status(401).json({ error: 'Cognito authentication failed', details: err?.message || err });
    }
  }

  // Retry logic for backend 503 errors
  async function fetchWithRetry(url: string, options: RequestInit, retries = 3, delayMs = 500): Promise<Response> {
    let lastResp: Response | null = null;
    for (let attempt = 1; attempt <= retries; attempt++) {
      const resp = await fetch(url, options);
      if (resp.status !== 503) {
        return resp;
      }
      lastResp = resp;
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, delayMs));
      }
    }
    // lastResp is guaranteed to be set if we exit the loop
    return lastResp!;
  }

  try {
    const apiResp = await fetchWithRetry('https://exxapi4h0e.execute-api.us-east-1.amazonaws.com/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify({ description, provider }),
    });
    const data = await apiResp.json();
    if (!apiResp.ok) {
      return res.status(apiResp.status).json(data);
    }
    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: 'Upstream API error', details: err?.message || err });
  }
}
