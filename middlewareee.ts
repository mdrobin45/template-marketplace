import { auth } from "auth";
import { NextRequest, NextResponse } from "next/server";
import { LOGIN, PROTECTED_ROUTES } from "utils/routes";

export async function middleware(request: NextRequest) {
   const { nextUrl } = request;
   const session = await auth();

   console.log(nextUrl);

   const isAuthenticated = !!session?.user;

   const isPrivateRoute = PROTECTED_ROUTES.find((route) =>
      nextUrl.pathname.startsWith(route)
   );

   if (!isAuthenticated && isPrivateRoute) {
      return NextResponse.redirect(new URL(LOGIN, nextUrl));
   }
}

export const config = {
   matcher: [
      "/((?!api|_next/static|_next/image|assets/images|icons|favicon.ico|sitemap.xml|robots.txt).*)",
   ],
};
