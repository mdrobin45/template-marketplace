import authConfig from "auth.config";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { LOGIN, PROTECTED_ROUTES, REGISTER } from "utils/routes";

const { auth } = NextAuth(authConfig);
export async function middleware(request: NextRequest) {
   const { nextUrl } = request;
   const session = await auth();
   const isAuthenticated = !!session?.user;

   const isPrivateRoute = PROTECTED_ROUTES.find((route) =>
      nextUrl.pathname.startsWith(route)
   );
   if (!isAuthenticated && isPrivateRoute) {
      return NextResponse.redirect(new URL(LOGIN, nextUrl));
   }

   const isAuthRoute =
      nextUrl.pathname.startsWith(LOGIN) ||
      nextUrl.pathname.startsWith(REGISTER);
   if (isAuthenticated && isAuthRoute) {
      return NextResponse.redirect(new URL("/user", nextUrl));
   }
}

export const config = {
   matcher: [
      "/((?!api|_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt).*)",
   ],
};
