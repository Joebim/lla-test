"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface SigninFormData {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SigninFormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTyping, setPasswordTyping] = useState(false);

  const password = watch("password");
  const email = watch("email");

  const passwordCriteria = {
    length: password ? password.length : 0,
    uppercase: password ? /[A-Z]/.test(password) : false,
    lowercase: password ? /[a-z]/.test(password) : false,
    number: password ? /\d/.test(password) : false,
    specialChar: password ? /[!"#$%&()*,.:<>?@^{|}]/.test(password) : false,
  };

  const allCriteriaMet = Object.values(passwordCriteria).every(Boolean);
  const isEmailValid = /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/.test(email);
  const isFormValid = isEmailValid && passwordCriteria;

  useEffect(() => {
    setPasswordTyping(password?.length > 0 || false);
  }, [password]);

  const onSubmit = () => {
    setSubmitSuccess(true);
    window.location.href = "/setup-profile";
  };

  return (
    <div className="my-auto w-full rounded-[16px] bg-[#FFFF] p-6 lg:w-[600px]">
      <div className="mb-4 flex justify-center rounded-[62px] border p-[4px]">
        <Link
          href="/signup"
          className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${isSignIn ? "" : "bg-neutral-30"}`}
          onClick={() => setIsSignIn(false)}
        >
          Sign Up
        </Link>
        <button
          className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${isSignIn ? "bg-neutral-30" : ""}`}
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
            placeholder="johndoe@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address",
              },
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
          className="h-[56px] w-full rounded-[59px] bg-primary-100 px-4 py-2 text-[#FFFF] hover:bg-primary-80 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-opacity-50"
          disabled={!isFormValid || isSubmitting}
        >
          Sign In
        </button>
        {submitSuccess && (
          <p className="mt-1 text-sm text-green-500">Login Successful!</p>
        )}
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
      <button className="mt-4 flex h-[56px] w-full items-center justify-center gap-2 rounded-[59px] bg-secondary-120 px-4 py-2 text-secondary-10 hover:bg-secondary-110 focus:outline-none focus:ring-2 focus:ring-opacity-50">
        <Image src="/signup/googleicon.png" alt="" width={20} height={20} />{" "}
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SignInPage;
