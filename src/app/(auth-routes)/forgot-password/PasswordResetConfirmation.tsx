import Image from "next/image";
import Link from "next/link";

interface PasswordResetConfirmationProperties {
  onClose: () => void;
}

const PasswordResetConfirmation: React.FC<
  PasswordResetConfirmationProperties
> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="shadow-lg mt-12 flex h-[471px] w-[600px] flex-col justify-center gap-10 rounded-[16px] bg-white p-6">
        <div className="mb-4 text-center">
          <div className="mb-2 flex justify-center">
            {/* <span className="text-green-500 text-5xl">✔️</span> */}
            <Image
              src="/passwordreset/ticksuccess.png"
              alt="Email Sent"
              width={120}
              height={120}
              className=""
            />
          </div>
          <h2 className="mb-2 text-[36px] font-semibold text-secondary-110">
            Password Reset
          </h2>
          <p className="text-[18px] text-[#525252]">
            Your password has been updated.
          </p>
        </div>
        <Link href="/signin">
          <button
            className="w-full rounded-[59px] bg-primary-120 px-[32px] py-[10px] text-white"
            onClick={onClose}
          >
            Back to Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordResetConfirmation;
