import Image from "next/image";
import React from "react";

interface ModalProperties {
  email: string;
  onVerify: () => void;
}

const Modal: React.FC<ModalProperties> = ({ email, onVerify }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      onClick={onVerify}
    >
      <div
        className="shadow-lg mt-12 w-[600px] rounded-[16px] bg-white p-8 text-center"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src="/passwordreset/email.png"
          alt="Email Sent"
          width={120}
          height={111.06}
          className="mx-auto mb-4 h-16 w-16"
        />
        <h2 className="mb-2 text-2xl font-semibold">Email Sent</h2>
        <p className="mb-4 text-[18px] leading-[28px] text-gray-700 md:w-[528px]">
          We&apos;ve sent a confirmation email to <strong>{email}</strong>.
          Follow its instructions to reset your password. If you don&apos;t see
          the email, please check your spam folder.
        </p>
        <button
          className="w-full rounded-[59px] bg-gray-200 py-[10px] text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          onClick={onVerify}
        >
          Resend Email
        </button>
      </div>
    </div>
  );
};

export default Modal;
