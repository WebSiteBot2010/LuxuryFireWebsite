import { NextResponse } from "next/server";

export function middleware(req) {
  const user = req.cookies.get("user");

  if (!user && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect("/login");
  }

  if (!user && req.nextUrl.pathname.startsWith("/staff")) {
    return NextResponse.redirect("/stafflogin");
  }

  return NextResponse.next();
}
