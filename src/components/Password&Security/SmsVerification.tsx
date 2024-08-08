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

  if (!isOpen) return null;

  const handleInputChange = (index: number, value: string) => {
    const newCode = code.split("");
    newCode[index] = value;
    setCode(newCode.join(""));
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
        className="w-full flex flex-col items-center max-w-md bg-white px-8 py-8 rounded-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 id="sms-verification-title" className="text-xl font-lilita">SMS Verification</h2>
        </div>
        {!isVerified ? (
          <>
            <div className="mb-4">
              <label
                htmlFor="sms-code"
                className="block text-sm font-medium text-center text-gray-400"
              >
                Enter the code sent to your phone
              </label>
              <div className="flex mt-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={code[index] || ""}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className="w-12 h-12 border border-gray-300 rounded-md outline-none text-center text-lg font-semibold"
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
        ) : (
          <div className="text-center text-green-500">
            <p>Success! Your code has been verified.</p>
          </div>
        )}
        <div className="text-xs pt-20">
          Need Help? <a href="#" className="text-blue-300">contact support</a>
        </div>
      </div>
    </div>
  );
};

export default SMSVerificationModal;
