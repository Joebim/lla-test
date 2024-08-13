import { NextRequest, NextResponse } from "next/server";

import { auth } from "~/lib/auth";
import {
  apiAuthPrefix,
  authRoutes,
  clientRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "~/lib/routes";

export async function middleware(request: NextRequest) {
  const session = await auth();

  // Define protected routes
  const url = request.nextUrl.pathname;
  const isApiAuthRoute = url.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(url);
  const isAuthRoute = authRoutes.includes(url);
  const isClientRoute = clientRoutes.includes(url);

  const adminRoles = new Set(["super_admin", "game_developer", "user_manager"]);

  if (isPublicRoute || isApiAuthRoute) {
    return NextResponse.next();
  }

  // Check if the user is not authenticated and trying to access a protected route
  if (!session && isClientRoute) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  // Check if the user is authenticated and trying to access an auth route
  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
  }

  // If authenticated, check user role and redirect accordingly
  if (session?.user) {
    const userRole = session.user.role as string;

    if (request.nextUrl.pathname.startsWith("/dashboard/admin")) {
      return adminRoles.has(userRole)
        ? NextResponse.redirect(new URL("/dashboard/admin", request.url))
        : NextResponse.redirect(new URL("/dashboard/user", request.url));
    }
  }

  // For all other routes, allow the request to proceed
  return NextResponse.next();
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [String.raw`/((?!.+\.[\w]+$|_next).*)`, "/", "/(api|trpc)(.*)"],
};
