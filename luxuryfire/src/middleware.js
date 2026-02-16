import { NextResponse } from "next/server";

export function middleware(req) {
  const user = req.cookies.get("user");

  if (!user && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!user && req.nextUrl.pathname.startsWith("/staff")) {
    return NextResponse.redirect(new URL("/stafflogin", req.url));
  }

  return NextResponse.next();
}
