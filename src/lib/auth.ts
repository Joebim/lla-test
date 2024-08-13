import NextAuth, { type DefaultSession } from "next-auth";

import authConfig from "~/config/auth.config";
import { User } from "~/types";

export const {
  handlers: { GET, POST },
  auth,
  unstable_update,
} = NextAuth({
  ...authConfig,
});

declare module "next-auth" {
  interface Session {
    user: {
      id: User["id"];
      username: User["username"];
      email: User["email"];
      image: User["avatar_url"];
      role: User["role"];
    } & DefaultSession["user"];
    access_token?: string;
  }
}
