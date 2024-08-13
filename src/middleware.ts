import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
// import {tokenExpire} from "./helpers/tokenExpire"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" ||
    path === "/signup" ||
    path === "/verifyemail" ||
    path === "/resetpassword";

  const token = request.cookies.get("token")?.value || "";
  // const checktoken =tokenExpire(token)
  
      // const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET! );
      // console.log("token:::",decodedToken)
  

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // if (!isPublicPath && token) {
  //   try {
  //     const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET! );
  //     console.log("token:::",decodedToken)
  //     const expirationTimestamp = decodedToken.exp; // Expiration timestamp in seconds
  //     console.log("expirationTimestamp:::",expirationTimestamp)

  //     if (expirationTimestamp <= Date.now() / 1000) {
  //       return NextResponse.redirect(new URL("/login", request.nextUrl));
  //     }
  //   } catch (error) {
  //     return NextResponse.redirect(new URL("/login", request.nextUrl));
  //   }
  // }






}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/profile",
    "/login",
    "/signup",
    "/verifyemail",
    "/resetpassword",
  ],
};
