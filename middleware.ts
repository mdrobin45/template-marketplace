import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
   // const { nextUrl } = request;
   // const session = await auth();
   // const isAuthenticated = !!session?.user;
   // console.log("Authenticate", session);
   // const isPrivateRoute = PROTECTED_ROUTES.find((route) =>
   //    nextUrl.pathname.startsWith(route)
   // );
   // if (!isAuthenticated && isPrivateRoute) {
   //    return NextResponse.redirect(new URL(LOGIN, nextUrl));
   // }
}

export const config = {
   matcher: [
      "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
   ],
};
