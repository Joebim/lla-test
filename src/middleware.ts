import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

import { apiAuthPrefix, authRoutes, publicRoutes } from "~/lib/routes";

// Define admin roles
const adminRoles = new Set(["super_admin", "game_developer", "user_manager"]);
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "";
const NEXT_PUBLIC_ROOT_DOMAIN = "staging.delve.fun";

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: NEXTAUTH_SECRET });
  const isLoggedIn = !!token;
  const userRole = token?.user?.role || "guest";
  const { nextUrl } = request;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute || isPublicRoute) return;

  const url = request.nextUrl;
  let hostname = request.headers
    .get("host")!
    .replace(/\.localhost(:\d+)?/, `.${NEXT_PUBLIC_ROOT_DOMAIN}`);

  hostname = hostname.replace("www.", ""); // remove www. from domain
  const searchParameters = request.nextUrl.searchParams.toString();
  const path = `${url.pathname}${
    searchParameters.length > 0 ? `?${searchParameters}` : ""
  }`;

  if (hostname == `dashboard.${NEXT_PUBLIC_ROOT_DOMAIN}`) {
    if (!isLoggedIn && !isAuthRoute) {
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${nextUrl.pathname}`, nextUrl),
      );
    } else if (isLoggedIn && isAuthRoute) {
      return NextResponse.redirect(new URL("/", nextUrl));
    }

    // Redirect based on user role
    if (isLoggedIn) {
      if (adminRoles.has(userRole)) {
        return NextResponse.rewrite(
          new URL(`/dashboard/admin${path === "/" ? "/" : path}`, request.url),
        );
      } else {
        return NextResponse.rewrite(
          new URL(`/dashboard/user${path === "/" ? "/" : path}`, request.url),
        );
      }
    }
  }

  return;
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
