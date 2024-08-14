"use client";

import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { registerUser } from "~/actions/register";
import { useToast } from "~/components/ui/use-toast";
import LoadingSpinner from "../miscellaneous/loading-spinner";

interface SignupFormData {
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const { toast } = useToast();
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, startTransition] = useTransition();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [passwordTyping, setPasswordTyping] = useState(false);

  const password = watch("password");

  const passwordCriteria = {
    length: password ? password.length : 0,
    uppercase: password ? /[A-Z]/.test(password) : false,
    lowercase: password ? /[a-z]/.test(password) : false,
    number: password ? /\d/.test(password) : false,
    specialChar: password ? /[!"#$%&()*,.:<>?@^{|}]/.test(password) : false,
  };

  const allCriteriaMet = Object.values(passwordCriteria).every(Boolean);

  useEffect(() => {
    setPasswordTyping(password?.length > 0 || false);
  }, [password]);

  const onSubmit = async (values: SignupFormData) => {
    startTransition(async () => {
      const data = await registerUser(values);

      if (data.status === 201) {
        const response = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });
        if (response && response.ok) {
          toast({
            title: "Registration successful",
            description: "Set up your profile",
          });
          router.push("/signup/profile");
        } else {
          toast({
            title: "Registration not successful",
            description: "Set up your profile",
            variant: "critical",
          });
        }
      } else if (data.status === 422) {
        const errors = data.error;
        if (errors["email"]) {
          setError("email", {
            type: "server",
            message: errors.email[0],
          });
        }
        if (errors.password) {
          setError("password", {
            type: "server",
            message: errors.password[0],
          });
        }
      } else {
        toast({
          title: "An error occurred",
          description: data.error,
          variant: "critical",
        });
      }
    });
  };

  return (
    <div className="my-auto w-full rounded-[16px] bg-[#FFFF] p-6 lg:w-[600px]">
      <div className="mb-4 flex justify-center rounded-[62px] border p-[4px]">
        <button
          className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${
            isSignUp ? "bg-neutral-30" : ""
          } transition-all duration-300`}
          onClick={() => setIsSignUp(true)}
        >
          Sign Up
        </button>
        <Link
          href="/signin"
          className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${
            isSignUp ? "" : "bg-neutral-30"
          } transition-all duration-300`}
          onClick={() => setIsSignUp(false)}
        >
          Sign In
        </Link>
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
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&()*,.:<>?@^{|}]).{8,}$/,
                  message: "Password did not meet criteria",
                },
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
          {passwordTyping && !allCriteriaMet && (
            <ul className="mt-2 text-sm">
              <li
                className={`flex items-center ${passwordCriteria.length >= 8 ? "text-green-500" : "text-critical-120"}`}
              >
                {passwordCriteria.length >= 8 ? "✔" : "✘"} At least 8
                characters
              </li>
              <li
                className={`flex items-center ${passwordCriteria.uppercase ? "text-green-500" : "text-critical-120"}`}
              >
                {passwordCriteria.uppercase ? "✔" : "✘"} One uppercase letter
              </li>
              <li
                className={`flex items-center ${passwordCriteria.lowercase ? "text-green-500" : "text-critical-120"}`}
              >
                {passwordCriteria.lowercase ? "✔" : "✘"} One lowercase letter
              </li>
              <li
                className={`flex items-center ${passwordCriteria.number ? "text-green-500" : "text-critical-120"}`}
              >
                {passwordCriteria.number ? "✔" : "✘"} One number
              </li>
              <li
                className={`flex items-center ${passwordCriteria.specialChar ? "text-green-500" : "text-critical-120"}`}
              >
                {passwordCriteria.specialChar ? "✔" : "✘"} One special
                character
              </li>
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="h-[56px] w-full rounded-[59px] bg-primary-100 px-4 py-2 text-[#FFFF] hover:bg-primary-80 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-opacity-50 disabled:bg-neutral-130"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-x-2">
              <span className="animate-pulse">Signing up...</span>{" "}
              <LoadingSpinner className="size-4 animate-spin sm:size-5" />
            </span>
          ) : (
            <span>Sign Up</span>
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

export default SignUpPage;
