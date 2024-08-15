"use server";

import axios from "axios";
import * as z from "zod";

import { RegisterSchema } from "~/schemas";

const apiUrl = process.env.API_URL;

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Registration  Failed. Please check and try again.",
    };
  }
  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/auth/register`,
      validatedFields.data,
    );

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Registration failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
