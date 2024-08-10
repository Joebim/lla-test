"use client";

import Link from "next/link";
import React, { useState } from "react";

import Modal from "./Modal"; // Adjust the path as needed

import PasswordResetConfirmation from "./PasswordResetConfirmation";
import PasswordResetModal from "./PasswordResetModal";
import VerifyEmailModal from "./VerifyEmailModal"; // Adjust the path as needed

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isEmailSentModalOpen, setIsEmailSentModalOpen] = useState(false);
  const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsEmailSentModalOpen(true);
  };

  const openVerifyEmailModal = () => {
    setIsEmailSentModalOpen(false);
    setIsVerifyEmailModalOpen(true);
  };

  const closeVerifyEmailModal = () => {
    setIsVerifyEmailModalOpen(false);
  };

  const handleReset = () => {
    setIsResetModalOpen(false);
    setIsConfirmationOpen(true);
  };

  const handleClose = () => {
    setIsConfirmationOpen(false);
  };

  const handleVerifyComplete = () => {
    setIsVerifyEmailModalOpen(false);
    setIsResetModalOpen(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="shadow-md mt-12 w-[600px] rounded-[16px] bg-white p-8">
        {!isEmailSentModalOpen &&
          !isVerifyEmailModalOpen &&
          !isResetModalOpen && (
            <>
              <h2 className="mb-4 text-center text-[36px] font-semibold">
                Forgot Password?
              </h2>
              <p className="mb-6 text-center text-[18px] leading-[28px] text-[#525252]">
                Enter the email address you used to create the account to
                receive instructions on how to reset your password
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="mb-2 block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="h-[52px] w-full rounded-[10px] border border-gray-300 px-3 py-2 outline-none"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-[59px] bg-orange-500 py-[10px] text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Send Instructions
                </button>
              </form>
              <Link href="/signin">
                <button
                  type="button"
                  className="mt-4 w-full rounded-[59px] bg-gray-200 py-[10px] text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  Return to Sign In
                </button>
              </Link>
            </>
          )}
        {isEmailSentModalOpen && (
          <Modal email={email} onVerify={openVerifyEmailModal} />
        )}
        {isVerifyEmailModalOpen && (
          <VerifyEmailModal
            email={email}
            onClose={closeVerifyEmailModal}
            onVerifyComplete={handleVerifyComplete}
          />
        )}
        {isResetModalOpen && (
          <PasswordResetModal
            onClose={() => setIsResetModalOpen(false)}
            onReset={handleReset}
          />
        )}
        {isConfirmationOpen && (
          <PasswordResetConfirmation onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
