import React, { useRef } from "react";

interface VerifyEmailModalProperties {
  email: string;
  onClose: () => void;
  onVerifyComplete: () => void; // Add a new prop to handle the transition to the next modal
}

const VerifyEmailModal: React.FC<VerifyEmailModalProperties> = ({
  email,
  onClose,
  onVerifyComplete,
}) => {
  const inputReferences = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = event.target.value;
    if (value.length === 1 && index < inputReferences.current.length - 1) {
      inputReferences.current[index + 1]?.focus();
    }

    // Check if all inputs are filled
    if (inputReferences.current.every((input) => input?.value.length === 1)) {
      onVerifyComplete();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (
      event.key === "Backspace" &&
      index > 0 &&
      !inputReferences.current[index]?.value
    ) {
      inputReferences.current[index - 1]?.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="shadow-lg mt-12 w-[600px] rounded-[16px] bg-white p-8 text-center"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-Secondary-110 mb-4 text-[36px] font-semibold">
          Verify Your Email
        </h2>
        <p className="mb-4 text-[18px] leading-[28px] text-gray-700 md:w-[528px]">
          An OTP code has been sent to <strong>{email}</strong>. Enter the code
          to complete sign up.
        </p>
        <div className="mb-4 flex justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              type="text"
              placeholder="-"
              className="mx-1 h-[63px] w-[60px] rounded-[10px] border border-gray-300 p-[24px] text-center outline-none"
              maxLength={1}
              ref={(element) => {
                inputReferences.current[index] = element;
              }}
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
          ))}
        </div>
        <p className="text-Neutral-130 mb-4 text-[18px]">
          Didn&apos;t get code? <br />
          <button className="text-primary-100 underline">Resend code</button>
        </p>
        <p className="text-gray-500">OTP expires in 15:00 mins</p>
      </div>
    </div>
  );
};

export default VerifyEmailModal;
