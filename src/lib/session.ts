"use server";

import { auth } from "~/lib/auth";

export const clientSession = async () => {
  const session = await auth();
  return session;
};
