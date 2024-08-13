/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "how-it-works",
  "/faqs",
  "/about-us",
  "/terms-of-use",
  "/privacy",
  "/blog",
];

export const authRoutes = ["/signup", "/signin", "/forgot-password"];

export const apiAuthPrefix = "/api/";

/**
 * The default redirect after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard/user";

/**
 * An array of routes that are accessible to the client
 * These routes require authentication
 * @type {string[]}
 */
export const clientRoutes = [
  "/dashboard",
  "/quests",
  "messages",
  "/notifications",
  "/profile",
];
