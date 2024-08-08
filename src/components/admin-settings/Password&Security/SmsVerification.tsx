"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

interface SMSVerificationModalProperties {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
}

const SMSVerificationModal: React.FC<SMSVerificationModalProperties> = ({
  isOpen,
  onClose,
  onVerify,
}) => {
  const [code, setCode] = useState<string>("");

  if (!isOpen) return;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = () => {
    onVerify(code);
    setCode("");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      style={{ background: "#0000005e" }}
    >
      <div
        className="w-full max-w-md rounded-xl bg-white px-6 py-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">SMS Verification</h2>
          <X
            size={20}
            className="cursor-pointer text-gray-600"
            onClick={onClose}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="sms-code"
            className="block text-sm font-medium text-gray-700"
          >
            Enter the code sent to your phone:
          </label>
          <input
            type="text"
            id="sms-code"
            value={code}
            onChange={handleInputChange}
            className="shadow-sm mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-opacity-50"
            placeholder="123456"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full rounded-3xl bg-orange-500 py-2 text-white"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default SMSVerificationModal;
