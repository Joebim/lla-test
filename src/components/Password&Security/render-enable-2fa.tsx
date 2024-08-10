import { ChevronLeft } from "lucide-react";

interface RenderEnable2FAProperties {
  open2FAModal: () => void;
  handleCancelClick: () => void;
}
const RenderEnable2FA = ({
  open2FAModal,
  handleCancelClick,
}: RenderEnable2FAProperties) => (
  <div className="relative flex w-full flex-col">
    <div className="flex items-center justify-between">
      <button
        className="rounded-full bg-gray-100 p-2"
        onClick={handleCancelClick}
      >
        <ChevronLeft size={20} className="text-black" />
      </button>
      <button
        className="absolute right-0 rounded-3xl bg-orange-500 px-8 py-3 text-xs text-white md:px-16 md:text-sm lg:-right-40"
        onClick={open2FAModal}
      >
        Continue
      </button>
    </div>
    <div className="mt-10 w-full">
      <h3 className="mb-4 font-axiformaBold text-2xl text-gray-700">
        Add an extra security system
      </h3>
      <p className="w-4/5 text-sm text-gray-400">
        2FA Authentication adds an extra layer of security by requiring two
        forms of verification. This ensures that even if your password is
        compromised, your account remains protected with an additional layer of
        defense. An additional code will be required when you log in on an
        unauthorized device.
      </p>
      <div className="mt-6 flex w-full flex-col">
        <h2 className="mb-4 font-axiformaBold text-lg text-gray-700">
          Choose your security method
        </h2>
        <div className="flex space-x-4">
          <div className="flex w-3/6 flex-col space-y-2">
            <label
              htmlFor="auth-app"
              className="font-axiformaSemiBold text-base text-gray-700"
            >
              Authentication app
            </label>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <p>
                For enhanced security, we recommend using an authentication app
                for verification. Authentication apps generate time-sensitive
                codes, making it much harder for unauthorized users to gain
                access to your account.
              </p>
              <div className="relative">
                <input
                  type="checkbox"
                  id="auth-app"
                  className="custom-checkbox"
                />
              </div>
            </div>
          </div>
          <div className="flex w-2/5 flex-col space-y-2">
            <label
              htmlFor="sms-email"
              className="font-axiformaSemiBold text-base text-gray-700"
            >
              SMS or Email
            </label>
            <div className="flex items-center text-xs text-gray-400">
              <p>A code will be sent to your number or email.</p>
              <div className="relative">
                <input
                  type="checkbox"
                  id="sms-email"
                  className="custom-checkbox ml-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RenderEnable2FA;
