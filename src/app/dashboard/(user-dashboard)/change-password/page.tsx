"use client";

import { Eye, EyeOff } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { useToast } from "~/components/ui/use-toast";

const ChangePasswordPage = () => {
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formChanged, setFormChanged] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isSameAsCurrentPassword, setIsSameAsCurrentPassword] = useState(false);
  const [isCurrentPasswordEntered, setIsCurrentPasswordEntered] =
    useState(false);

  const handleCurrentPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const currentPass = event.target.value;
      setCurrentPassword(currentPass);
      setIsCurrentPasswordEntered(currentPass.length > 0);
      setFormChanged(true);
    },
    [],
  );

  const togglePasswordVisibility = useCallback(
    (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
      setter((previous) => !previous);
    },
    [],
  );

  const handleNewPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isCurrentPasswordEntered) {
        return;
      }
      const newPass = event.target.value;
      setNewPassword(newPass);
      setFormChanged(true);
      setIsSameAsCurrentPassword(newPass === currentPassword);
    },
    [currentPassword, isCurrentPasswordEntered],
  );

  const handleConfirmPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
      setPasswordsMatch(event.target.value === newPassword);
      setFormChanged(true);
    },
    [newPassword],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      // Add your password change logic here
      // For this example, we'll assume the change is always successful

      // Simulating an API call with a timeout
      setTimeout(() => {
        // Show success toast
        toast({
          description: "Password Changed successfully",
          variant: "default",
        });

        // Reset form
        handleDiscard();
      }, 1000); // Simulating a 1-second delay
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [toast],
  );

  const handleDiscard = useCallback(() => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setFormChanged(false);
    setPasswordStrength("");
    setIsSameAsCurrentPassword(false);
    setIsCurrentPasswordEntered(false);
  }, []);

  const checkPasswordStrength = useCallback((password: string) => {
    const strongRegex = new RegExp(
      String.raw`^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})`,
    );
    const mediumRegex = new RegExp(
      String.raw`^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*\d))|((?=.*[A-Z])(?=.*\d)))(?=.{6,})`,
    );

    if (strongRegex.test(password)) {
      return password.length > 6 ? "Very Strong" : "Strong";
      // eslint-disable-next-line vitest/no-conditional-tests
    } else if (mediumRegex.test(password)) {
      return "Medium";
    } else {
      return "Weak";
    }
  }, []);

  useEffect(() => {
    if (newPassword) {
      setPasswordStrength(checkPasswordStrength(newPassword));
    } else {
      setPasswordStrength("");
    }
  }, [newPassword, checkPasswordStrength]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F8FAFB] bg-opacity-50">
      <div className="max-x-4xl h-full w-[1032px] p-4 md:p-8">
        <div className="shadow-lg flex flex-col items-center overflow-hidden rounded-[20px] bg-white">
          <div className="w-full bg-[#F7F2EC] p-4 md:p-8">
            <h2 className="font-[axiforma] text-xl font-medium leading-9 tracking-[0.02em] text-[#1B1B1B] md:text-2xl">
              Change Your Password
            </h2>
          </div>
          <div className="w-full border-t border-[#E9EEF3] bg-white p-4 md:p-6">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Current Password Input */}
              <div>
                <label
                  htmlFor="currentPassword"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    id="currentPassword"
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                    placeholder="Enter current password"
                    className="w-full rounded-[10px] border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility(setShowCurrentPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password Input */}
              <div>
                <label
                  htmlFor="newPassword"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    placeholder="Enter new password"
                    className={`w-full rounded-[10px] border px-3 py-2 ${
                      isCurrentPasswordEntered
                        ? "border-gray-300"
                        : "border-red-300 bg-red-50"
                    } focus:border-indigo-500 focus:outline-none focus:ring-indigo-500`}
                    disabled={!isCurrentPasswordEntered}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility(setShowNewPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {!isCurrentPasswordEntered && (
                  <p className="mt-1 text-sm text-red-600">
                    Please enter your current password first
                  </p>
                )}
                {passwordStrength && (
                  <p
                    className={`mt-1 text-sm ${
                      passwordStrength === "Weak"
                        ? "text-red-600"
                        : passwordStrength === "Medium"
                          ? "text-yellow-600"
                          : passwordStrength === "Strong"
                            ? "text-green-600"
                            : "text-blue-600"
                    }`}
                  >
                    Password Strength: {passwordStrength}
                  </p>
                )}
                {isSameAsCurrentPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    New password cannot be the same as the current password
                  </p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Enter new password"
                    className={`w-full rounded-[10px] border px-3 py-2 ${
                      passwordsMatch ? "border-gray-300" : "border-red-500"
                    } focus:border-indigo-500 focus:outline-none focus:ring-indigo-500`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility(setShowConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {!passwordsMatch && (
                  <p className="mt-1 text-sm text-red-600">
                    Passwords do not match
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-row justify-start space-x-4">
                <button
                  type="button"
                  onClick={handleDiscard}
                  className={`h-12 min-w-[120px] max-w-[189px] flex-1 rounded-[59px] px-3 py-2.5 font-[axiforma] text-sm font-semibold leading-7 ${
                    formChanged
                      ? "bg-gray-200 text-gray-700"
                      : "bg-[#F8FAFB] text-[#E7E7E7]"
                  } border-b border-[#E7E7E7] shadow-[inset_0_4px_4px_rgba(0,0,0,0.05)]`}
                >
                  Discard Changes
                </button>
                <button
                  type="submit"
                  disabled={
                    !formChanged || !passwordsMatch || isSameAsCurrentPassword
                  }
                  className={`h-12 min-w-[120px] max-w-[189px] flex-1 rounded-[59px] px-4 py-2.5 font-[axiforma] text-sm font-semibold leading-5 ${
                    formChanged && passwordsMatch && !isSameAsCurrentPassword
                      ? "bg-orange-500 text-white"
                      : "bg-[#FFBD99] text-white opacity-80"
                  } border-b border-[#FEAC80]`}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
