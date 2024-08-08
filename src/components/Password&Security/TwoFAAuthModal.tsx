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

const TwoFAAuthModal: React.FC<TwoFAAuthModalProperties> = ({ isOpen, isClose }) => {
  const [activeTab, setActiveTab] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [isSMSModalOpen, setIsSMSModalOpen] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirm = () => {
    isClose(); // Close the current modal
    setIsSMSModalOpen(true); // Open the SMS Verification modal
  };

  return (
    <>
      <Dialog open={isOpen}>
        <DialogTrigger />
        <DialogContent className="flex bg-white flex-col pt-8 px-0 pb-10 !rounded-none max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex flex-col px-9 items-center mb-4">
              <h2 className="text-[#2A2A2A] text-[28px] tracking-[1.12px] leading-[42px] font-lilita">
                2FA-Authentication
              </h2>
              <p className="text-sm text-gray-400 leading-[24px]">
                To continue, please enter your password
              </p>
            </DialogTitle>
            <div className="flex items-center justify-center gap-[59px] p-5 text-sm">
              <button
                onClick={() => setActiveTab("email")}
                className={`flex items-center justify-center gap-2 p-[10px] cursor-pointer ${activeTab === "email" ? "text-[#FE6A19] border-[#FE6A19] border-b-2" : "text-[#717171]"}`}
              >
                <Mail size={20} />
                Email
              </button>
              <button
                onClick={() => setActiveTab("phoneNumber")}
                className={`flex items-center justify-center gap-2 p-[10px] cursor-pointer ${activeTab === "phoneNumber" ? "text-[#FE6A19] border-[#FE6A19] border-b-2" : "text-[#717171]"}`}
              >
                <Phone size={20} />
                Phone Number
              </button>
            </div>
            <form>
              <div className="px-9">
                {activeTab === "email" && (
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-sm text-left text-[#9BB1C9]">Enter Email Address</label>
                    <input type="email" id="email" className="px-4 py-3 border border-[#E9EEF3] outline-none rounded-[10px]" />
                  </div>
                )}
                {activeTab === "phoneNumber" && (
                  <div className="flex flex-col gap-3">
                    <label htmlFor="phoneNumber" className="text-sm text-left text-[#9BB1C9]">Enter Phone Number</label>
                    <input type="text" id="phoneNumber" className="px-4 py-3 border border-[#E9EEF3] outline-none rounded-[10px]" />
                  </div>
                )}
                <div className="flex flex-col gap-3 mt-4">
                  <label htmlFor="password" className="text-sm text-left text-[#9BB1C9]">Enter Password</label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} id="password" className="w-full px-4 py-3 border border-[#E9EEF3] outline-none rounded-[10px]" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" onClick={toggleShowPassword}>
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-2 w-full bg-[#F4F6F9] my-8"></div>
              <div className="flex justify-end gap-6 px-9">
                <DialogClose asChild>
                  <button onClick={isClose} className="py-3 px-8 inline-flex items-center text-[#CC4900] text-sm font-semibold border border-[#E43F00] rounded-[59px] hover:bg-[#FE6A19]/10">
                    Cancel
                  </button>
                </DialogClose>
                <button onClick={handleConfirm} className="bg-[#FE6A19] py-3 px-8 inline-flex items-center text-white text-sm rounded-[59px] hover:bg-[#FE6A19]/80">
                  Confirm
                </button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* SMS Verification Modal */}
      <SMSVerificationModal isOpen={isSMSModalOpen} onClose={() => setIsSMSModalOpen(false)} />
    </>
  );
};

export default TwoFAAuthModal;
