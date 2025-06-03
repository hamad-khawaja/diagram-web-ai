
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Minimal middleware for debugging: no headers
  return NextResponse.next();
}
