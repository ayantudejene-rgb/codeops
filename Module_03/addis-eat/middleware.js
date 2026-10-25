import { NextResponse } from "next/server";

export function middleware(request) {
  const session = request.cookies.get("session");

  // If no session cookie exists, redirect to sign in
  if (!session) {
    const url = new URL("/signin", request.url);
    // Remember where they were trying to go
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Keep it narrow: only protect private routes
export const config = {
  matcher: ["/checkout", "/orders/:path*", "/kitchen"],
};