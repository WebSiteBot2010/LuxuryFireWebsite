import { NextResponse } from "next/server";

export function middleware(req) {
  const user = req.cookies.get("user");

  // Proteggi dashboard
  if (!user && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Proteggi staff panel
  if (!user && req.nextUrl.pathname.startsWith("/staff")) {
    return NextResponse.redirect(new URL("/stafflogin", req.url));
  }

  return NextResponse.next();
}

// Su Next.js 16+ serve definire i matcher
export const config = {
  matcher: ["/dashboard/:path*", "/staff/:path*"],
};
