import type { NextApiRequest, NextApiResponse } from 'next';
import { getCognitoJwt, getCachedJwt } from '../../lib/cognitoAuth';

// This API route proxies requests to the AWS API Gateway, handling Cognito auth server-side
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

  try {
    const apiResp = await fetch('https://oe4b2ep0ch.execute-api.us-east-1.amazonaws.com/generate', {
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
