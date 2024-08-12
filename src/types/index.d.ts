import { User } from "lucide-react";
import { Session, type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface CustomJWT extends JWT {
  id?: string;
  email?: string;
  picture?: string;
  avatar_url?: string;
  role?: string;
  first_name?: string;
  last_name?: string;
  fullname?: string;
  username?: string;
  access_token?: string;
}
export interface CustomSession extends Session {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    image: string;
    role: string;
  };
  expires: DefaultSession["expires"];
  access_token?: string;
}

export interface User {
  id?: string;
  role?: string;
  email?: string;
  fullname?: string;
  avatar_url?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  expires_in?: string;
}

export interface extendedUser extends User {
  access_token?: string;
}

export interface ApiResponseData {
  access_token: string;
  user: User;
}
export interface ApiResponse {
  status: string;
  status_code: number;
  message: string;
  data: ApiResponseData;
}

export interface Profile {
  id_token: string;
}

export interface AuthResponse {
  data: User;
  access_token: string;
}

export interface ErrorResponse {
  message: string;
  status_code?: number;
}
