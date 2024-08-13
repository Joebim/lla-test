"use client";

import { Eye, EyeOff } from "lucide-react";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { loginUser } from "~/actions/login";
import { useToast } from "~/components/ui/use-toast";
import LoadingSpinner from "../miscellaneous/loading-spinner";

interface SigninFormData {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { user } = session ?? {};
  const userRole = user?.role;
  const adminRoles = new Set(["super_admin", "game_developer", "user_manager"]);
  if (status === "authenticated") {
    if (userRole && adminRoles.has(userRole)) router.push("/dashboard/admin");
    else router.push("/dashboard/user");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const { toast } = useToast();
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, startTransition] = useTransition();
  const [googleLoading, setGoogleLoading] = useState(false);

  const onSubmit = async (values: SigninFormData) => {
    startTransition(async () => {
      const data = await loginUser(values);
      if (data.status === 200) {
        const response = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });
        if (response && response.ok) {
          const current_session = await getSession();
          if (
            current_session?.user?.role &&
            adminRoles.has(current_session.user.role)
          )
            router.push("/dashboard/admin");
          else router.push("/dashboard/user");
        }
      }
      toast({
        title: data.status === 200 ? "Login success" : "An error occurred",
        description: data.status === 200 ? "Redirecting" : data.error,
        variant: data.status === 200 ? "default" : "critical",
      });
    });
  };

  return (
    <div className="my-auto w-full rounded-[16px] bg-[#FFFF] p-6 lg:w-[600px]">
      <div className="mb-4 flex justify-center rounded-[62px] border p-[4px]">
        <Link
          href="/signup"
          className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${
            isSignIn ? "" : "bg-neutral-30"
          } transition-all duration-300`}
          onClick={() => setIsSignIn(false)}
        >
          Sign Up
        </Link>
        <button
          className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${
            isSignIn ? "bg-neutral-30" : ""
          } transition-all duration-300`}
          onClick={() => setIsSignIn(true)}
        >
          Sign In
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-[16px] text-secondary-120"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            disabled={isLoading}
            placeholder="johndoe@example.com"
            {...register("email", {
              required: "Email is required",
            })}
            className="h-[52px] w-full rounded-[10px] border px-4 py-2 text-base text-secondary-70 outline-none sm:text-[18px]"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-critical-120">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-[16px] text-secondary-120"
          >
            Password
          </label>
          <div className="relative w-full">
            <input
              id="password"
              disabled={isLoading}
              type={showPassword ? "text" : "password"}
              placeholder="********"
              {...register("password", {
                required: "Password is required",
              })}
              className="h-[52px] w-full rounded-[10px] border px-4 py-2 text-base text-secondary-70 outline-none sm:text-[18px]"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-secondary-120"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-critical-120">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="my-3 flex justify-end">
          <Link
            href={"/forgot-password"}
            className="font-axiforma font-[500] text-primary-100"
          >
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="h-[56px] w-full rounded-[59px] bg-primary-100 px-4 py-2 text-[#FFFF] hover:bg-primary-80 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-opacity-50 disabled:bg-neutral-130"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-x-2">
              <span className="animate-pulse">Logging in...</span>{" "}
              <LoadingSpinner className="size-4 animate-spin sm:size-5" />
            </span>
          ) : (
            <span>Sign In</span>
          )}
        </button>
      </form>
      <div className="my-8 flex items-center justify-center">
        <div className="mr-6 w-1/2">
          <hr />
        </div>
        <span className="text-neutral-90">OR</span>
        <div className="ml-6 w-1/2">
          <hr />
        </div>
      </div>
      <button
        className="mt-4 flex h-[56px] w-full items-center justify-center gap-2 rounded-[59px] bg-secondary-120 px-4 py-2 text-secondary-10 hover:bg-secondary-110 focus:outline-none focus:ring-2 focus:ring-opacity-50"
        onClick={() => {
          setGoogleLoading(true);
          signIn("google", { callbackUrl: "/dashboard/user" });
        }}
        disabled={googleLoading}
      >
        <Image src="/signup/googleicon.png" alt="" width={20} height={20} />{" "}
        <span>Continue with Google</span>
        {googleLoading && (
          <LoadingSpinner className="ml-1 size-4 animate-spin sm:size-5" />
        )}
      </button>
    </div>
  );
};

export default SignInPage;
