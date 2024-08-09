"use client";

import React, { useState } from "react";

interface SMSVerificationModalProperties {
  isOpen: boolean;
  onClose: () => void;
}

const SMSVerificationModal: React.FC<SMSVerificationModalProperties> = ({
  isOpen,
  onClose,
}) => {
  const [code, setCode] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false);

  if (!isOpen) return;

  const handleInputChange = (index: number, value: string) => {
    setCode((previousCode) => {
      const codeArray = [...previousCode]; // Use spread operator
      codeArray[index] = value;
      return codeArray.join("");
    });
  };

  const handleSubmit = () => {
    // Simulate verification logic
    if (code.length === 6) {
      setIsVerified(true);
      setTimeout(() => {
        onClose(); // Close modal after a short delay to show the success message
      }, 1000);
    } else {
      alert("Please enter a valid 6-digit code.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      style={{ background: "#0000005e" }}
      aria-labelledby="sms-verification-title"
      aria-modal="true"
    >
      <div
        className="flex w-full max-w-md flex-col items-center rounded-lg bg-white px-8 py-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 id="sms-verification-title" className="font-lilita text-xl">
            SMS Verification
          </h2>
        </div>
        {isVerified ? (
          <div className="text-center text-green-500">
            <p>Success! Your code has been verified.</p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label
                htmlFor="sms-code"
                className="block text-center text-sm font-medium text-gray-400"
              >
                Enter the code sent to your phone
              </label>
              <div className="mt-2 flex">
                {Array.from({ length: 6 }).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={code[index] || ""}
                    onChange={(event) =>
                      handleInputChange(index, event.target.value)
                    }
                    className="h-12 w-12 rounded-md border border-gray-300 text-center text-lg font-semibold outline-none"
                    placeholder="•"
                    autoFocus={index === 0 && code === ""}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full rounded-3xl bg-orange-500 py-2 text-white"
            >
              Verify
            </button>
          </>
        )}
        <div className="pt-20 text-xs">
          Need Help?{" "}
          <a href="#" className="text-blue-300">
            contact support
          </a>
        </div>
      </div>
    </div>
  );
};

export default SMSVerificationModal;
