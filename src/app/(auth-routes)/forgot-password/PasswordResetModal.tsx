import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface PasswordResetModalProperties {
  onClose: () => void;
  onReset: () => void;
}

const validatePassword = (password: string) => {
  const minLength = /.{8,}/;
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const number = /\d/;
  const specialChar = /[!#$%&*@^]/;

  return (
    minLength.test(password) &&
    upperCase.test(password) &&
    lowerCase.test(password) &&
    number.test(password) &&
    specialChar.test(password)
  );
};

const PasswordResetModal: React.FC<PasswordResetModalProperties> = ({
  onReset,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // const validatePassword = (password: string) => {
  //   const minLength = /.{8,}/;
  //   const upperCase = /[A-Z]/;
  //   const lowerCase = /[a-z]/;
  //   const number = /\d/;
  //   const specialChar = /[!#$%&*@^]/;

  //   return (
  //     minLength.test(password) &&
  //     upperCase.test(password) &&
  //     lowerCase.test(password) &&
  //     number.test(password) &&
  //     specialChar.test(password)
  //   );
  // };

  const handleSubmit = () => {
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, include uppercase and lowercase letters, numbers, and special characters.",
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Simulate successful reset
    setSuccessMessage("Password reset successfully! Redirecting to login...");
    setTimeout(() => {
      onReset();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="shadow-lg mt-16 flex h-[471px] w-[600px] justify-center rounded-[16px] bg-white p-6">
        <div className="my-auto w-full">
          <h2 className="mb-2 text-center text-[36px] font-semibold">
            Reset Your Password
          </h2>
          <p className="mb-4 text-center text-[14px]">
            Enter a new password that you can remember
          </p>
          <div className="mb-4">
            <label className="mb-2 block text-[16px]">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-[10px] border border-gray-300 px-[16px] py-[12px] outline-none"
                value={password}
                placeholder="**********"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
              <span
                className="absolute right-2 top-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-[16px]">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full rounded-[10px] border border-gray-300 px-[16px] py-[12px] outline-none"
                value={confirmPassword}
                placeholder="**********"
                required
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <span
                className="absolute right-2 top-3 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
          </div>
          {errorMessage && (
            <p className="mb-4 text-center text-red-500">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="mb-4 text-center text-green-500">{successMessage}</p>
          )}
          <button
            className="w-full rounded-[59px] bg-primary-100 px-[32px] py-[10px] text-white"
            onClick={handleSubmit}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetModal;
