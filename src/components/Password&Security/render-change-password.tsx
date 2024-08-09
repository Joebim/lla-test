import { Eye, EyeOff } from "lucide-react";

interface ChangePasswordProperties {
  oldPassword: string;
  newPassword: string;
  showOldPassword: boolean;
  showNewPassword: boolean;
  errorMessages: {
    oldPassword?: string;
    newPassword?: string;
  };
  setOldPassword: (value: string) => void;
  setNewPassword: (value: string) => void;
  setShowOldPassword: (value: boolean) => void;
  setShowNewPassword: (value: boolean) => void;
  handleSaveClick: () => void;
  handleCancelClick: () => void;
}

const RenderChangePassword = ({
  oldPassword,
  newPassword,
  showOldPassword,
  showNewPassword,
  errorMessages,
  setOldPassword,
  setNewPassword,
  setShowOldPassword,
  setShowNewPassword,
  handleSaveClick,
  handleCancelClick,
}: ChangePasswordProperties) => (
  <div className="mt-6 w-full lg:w-3/5">
    <h3 className="mb-4 text-xl text-gray-700">Change Password</h3>

    <div className="relative mb-4">
      <label htmlFor="old-password" className="block text-sm text-gray-500">
        Old Password
      </label>
      <div className="relative">
        <input
          type={showOldPassword ? "text" : "password"}
          id="old-password"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
          className={`mt-2 w-full border px-4 py-2 font-semibold focus:border-orange-300 focus:outline-none ${errorMessages.oldPassword ? "border-red-500" : "border-black"}`}
          style={{ borderRadius: "6px" }}
          aria-invalid={!!errorMessages.oldPassword}
          aria-describedby="old-password-error"
        />
        {errorMessages.oldPassword && (
          <p id="old-password-error" className="text-xs text-red-500">
            {errorMessages.oldPassword}
          </p>
        )}
        <div
          className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3"
          onClick={() => setShowOldPassword(!showOldPassword)}
          aria-label={showOldPassword ? "Hide password" : "Show password"}
        >
          {showOldPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </div>
      </div>
    </div>

    {/* New Password */}
    <div className="relative mb-4">
      <label htmlFor="new-password" className="block text-sm text-gray-500">
        New Password
      </label>
      <div className="relative">
        <input
          type={showNewPassword ? "text" : "password"}
          id="new-password"
          value={newPassword}
          onChange={(error) => setNewPassword(error.target.value)}
          className={`mt-2 w-full border px-4 py-2 font-semibold focus:border-orange-300 focus:outline-none ${errorMessages.newPassword ? "border-red-500" : "border-black"}`}
          style={{ borderRadius: "6px" }}
          aria-invalid={!!errorMessages.newPassword}
          aria-describedby="new-password-error"
        />
        {errorMessages.newPassword && (
          <p id="new-password-error" className="text-xs text-red-500">
            {errorMessages.newPassword}
          </p>
        )}
        <div
          className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3"
          onClick={() => setShowNewPassword(!showNewPassword)}
          aria-label={showNewPassword ? "Hide password" : "Show password"}
        >
          {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex space-x-4">
      <button
        className="rounded-3xl bg-orange-500 p-3 px-6 text-xs text-white"
        onClick={handleSaveClick}
      >
        Update
      </button>
      <button
        className="rounded-3xl border border-orange-300 p-3 px-6 text-xs text-orange-500"
        onClick={handleCancelClick}
      >
        Cancel
      </button>
    </div>
  </div>
);

export default RenderChangePassword;
