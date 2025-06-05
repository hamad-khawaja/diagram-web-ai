// Simple in-memory store for IP rate limiting
// Note: This will reset on server restart. For production, use Redis or a database.
interface RateLimitEntry {
  count: number;
  firstRequest: number; // timestamp (ms)
}

const RATE_LIMIT: Record<string, RateLimitEntry> = {};
export default RATE_LIMIT;
