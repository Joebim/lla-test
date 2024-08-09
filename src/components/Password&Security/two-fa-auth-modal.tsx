import { Eye, EyeOff, Mail, Phone } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import SMSVerificationModal from "./SmsVerification";

interface TwoFAAuthModalProperties {
  isOpen: boolean;
  isClose: () => void;
}

const TwoFAAuthModal: React.FC<TwoFAAuthModalProperties> = ({
  isOpen,
  isClose,
}) => {
  const [activeTab, setActiveTab] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [isSMSModalOpen, setIsSMSModalOpen] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirm = () => {
    isClose();
    setIsSMSModalOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen}>
        <DialogTrigger />
        <DialogContent className="flex max-w-[500px] flex-col !rounded-none bg-white px-0 pb-10 pt-8">
          <DialogHeader>
            <DialogTitle className="mb-4 flex flex-col items-center px-9">
              <h2 className="font-lilita text-[28px] leading-[42px] tracking-[1.12px] text-[#2A2A2A]">
                2FA-Authentication
              </h2>
              <p className="text-sm leading-[24px] text-gray-400">
                To continue, please enter your password
              </p>
            </DialogTitle>
            <div className="flex items-center justify-center gap-[59px] p-5 text-sm">
              <button
                onClick={() => setActiveTab("email")}
                className={`flex cursor-pointer items-center justify-center gap-2 p-[10px] ${activeTab === "email" ? "border-b-2 border-[#FE6A19] text-[#FE6A19]" : "text-[#717171]"}`}
              >
                <Mail size={20} />
                Email
              </button>
              <button
                onClick={() => setActiveTab("phoneNumber")}
                className={`flex cursor-pointer items-center justify-center gap-2 p-[10px] ${activeTab === "phoneNumber" ? "border-b-2 border-[#FE6A19] text-[#FE6A19]" : "text-[#717171]"}`}
              >
                <Phone size={20} />
                Phone Number
              </button>
            </div>
            <form>
              <div className="px-9">
                {activeTab === "email" && (
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="email"
                      className="text-left text-sm text-[#9BB1C9]"
                    >
                      Enter Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="rounded-[10px] border border-[#E9EEF3] px-4 py-3 outline-none"
                    />
                  </div>
                )}
                {activeTab === "phoneNumber" && (
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="phoneNumber"
                      className="text-left text-sm text-[#9BB1C9]"
                    >
                      Enter Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      className="rounded-[10px] border border-[#E9EEF3] px-4 py-3 outline-none"
                    />
                  </div>
                )}
                <div className="mt-4 flex flex-col gap-3">
                  <label
                    htmlFor="password"
                    className="text-left text-sm text-[#9BB1C9]"
                  >
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="w-full rounded-[10px] border border-[#E9EEF3] px-4 py-3 outline-none"
                    />
                    <span
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-8 h-2 w-full bg-[#F4F6F9]"></div>
              <div className="flex justify-end gap-6 px-9">
                <DialogClose asChild>
                  <button
                    onClick={isClose}
                    className="inline-flex items-center rounded-[59px] border border-[#E43F00] px-8 py-3 text-sm font-semibold text-[#CC4900] hover:bg-[#FE6A19]/10"
                  >
                    Cancel
                  </button>
                </DialogClose>
                <button
                  onClick={handleConfirm}
                  className="inline-flex items-center rounded-[59px] bg-[#FE6A19] px-8 py-3 text-sm text-white hover:bg-[#FE6A19]/80"
                >
                  Confirm
                </button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <SMSVerificationModal
        isOpen={isSMSModalOpen}
        onClose={() => setIsSMSModalOpen(false)}
      />
    </>
  );
};

export default TwoFAAuthModal;
