import authConfig from "auth.config";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { LOGIN, PROTECTED_ROUTES } from "utils/routes";

const { auth } = NextAuth(authConfig);
export async function middleware(request: NextRequest) {
   const { nextUrl } = request;
   const session = await auth();
   const isAuthenticated = !!session?.user;
   console.log("Authenticate", isAuthenticated);

   const isPrivateRoute = PROTECTED_ROUTES.find((route) =>
      nextUrl.pathname.startsWith(route)
   );
   if (!isAuthenticated && isPrivateRoute) {
      return NextResponse.redirect(new URL(LOGIN, nextUrl));
   }
}

export const config = {
   matcher: [
      "/((?!api|_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt).*)",
   ],
};
