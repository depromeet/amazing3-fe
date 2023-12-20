import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken');

  return token ? NextResponse.next() : NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/goal/:path*', '/member/:path*', '/home/:path*'],
};
