import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface PasswordResetModalProperties {
  onClose: () => void;
  onReset: () => void;
}

const validatePassword = (password: string) => {
  const criteria = {
    minLength: password.length >= 8,
    upperCase: /[A-Z]/.test(password),
    lowerCase: /[a-z]/.test(password),
    number: /\d/.test(password),
    specialChar: /[!#$%&*@^]/.test(password),
  };

  const isValid =
    criteria.minLength &&
    criteria.upperCase &&
    criteria.lowerCase &&
    criteria.number &&
    criteria.specialChar;

  return { isValid, criteria };
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
  const [passwordCriteria, setPasswordCriteria] = useState({
    minLength: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setErrorMessage(""); // Clear error message when user starts typing

    if (newPassword) {
      const { isValid, criteria } = validatePassword(newPassword);
      setPasswordCriteria(criteria);

      if (isValid) {
        setErrorMessage("");
      }
    } else {
      setPasswordCriteria({
        minLength: false,
        upperCase: false,
        lowerCase: false,
        number: false,
        specialChar: false,
      });
    }
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(event.target.value);
    setErrorMessage(""); // Clear error message when user starts typing
  };

  const handleSubmit = () => {
    if (!password && !confirmPassword) {
      setErrorMessage("New Password and Confirm New Password are required.");
      return;
    }

    if (!password) {
      setErrorMessage("New Password is required.");
      return;
    }

    if (!confirmPassword) {
      setErrorMessage("Confirm New Password is required.");
      return;
    }

    const { isValid } = validatePassword(password);

    if (!isValid) {
      setErrorMessage("Password must meet the criteria listed.");
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
                onChange={handlePasswordChange}
              />
              <span
                className="absolute right-2 top-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
            {password && !validatePassword(password).isValid && (
              <ul className="mt-2 text-sm text-red-500">
                <li
                  className={passwordCriteria.minLength ? "text-green-500" : ""}
                >
                  {passwordCriteria.minLength ? "✔" : "✖"} At least 8
                  characters
                </li>
                <li
                  className={passwordCriteria.upperCase ? "text-green-500" : ""}
                >
                  {passwordCriteria.upperCase ? "✔" : "✖"} At least one
                  uppercase letter
                </li>
                <li
                  className={passwordCriteria.lowerCase ? "text-green-500" : ""}
                >
                  {passwordCriteria.lowerCase ? "✔" : "✖"} At least one
                  lowercase letter
                </li>
                <li className={passwordCriteria.number ? "text-green-500" : ""}>
                  {passwordCriteria.number ? "✔" : "✖"} At least one number
                </li>
                <li
                  className={
                    passwordCriteria.specialChar ? "text-green-500" : ""
                  }
                >
                  {passwordCriteria.specialChar ? "✔" : "✖"} At least one
                  special character
                </li>
              </ul>
            )}
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
                onChange={handleConfirmPasswordChange}
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
