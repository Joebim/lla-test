"use client";

import { Eye, EyeOff } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { useToast } from "~/components/ui/use-toast";

function getStrengthColor(passwordStrength: string): string {
  switch (passwordStrength) {
    case "Weak": {
      return "red";
    }
    case "Medium": {
      return "yellow";
    }
    case "Strong":
    case "Very Strong": {
      return "green";
    }
    default: {
      return "gray";
    }
  }
}

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
      if (currentPass.length > 0) {
        setShowCurrentPassword(false);
      }
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
      }, 1000);
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
    <div className="bg h-[650px] rounded-[18px] border bg-[#FFFFFF] pb-[24px]">
      <div className="rounded-t-[18px] bg-primary-10 px-[20px] py-[32px]">
        <p className="text-[22px]">Change Your Password</p>
      </div>
      <div className="flex flex-col gap-y-[12px] p-[24px]">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Current Password Input */}
          <div>
            <label htmlFor="currentPassword" className="text-secondary-70">
              Current Password
            </label>
            <div className="relative mt-2">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="currentPassword"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
                placeholder="Enter current password"
                className="w-full rounded-[10px] border border-neutral-40 px-[12px] py-[18px]"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility(setShowCurrentPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
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
            <label htmlFor="newPassword" className="text-secondary-70">
              New Password
            </label>
            <div className="relative mt-2">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                value={newPassword}
                onChange={handleNewPasswordChange}
                onFocus={() => {
                  if (!isCurrentPasswordEntered) {
                    setShowCurrentPassword(true);
                  }
                }}
                placeholder="Enter new password"
                className={`w-full rounded-[10px] border border-neutral-40 px-[12px] py-[18px] ${
                  showCurrentPassword && !isCurrentPasswordEntered
                    ? "bg-red-50"
                    : ""
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility(setShowNewPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showNewPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {showCurrentPassword && !isCurrentPasswordEntered && (
              <p className="mt-1 text-sm text-red-600">
                Please enter your current password first
              </p>
            )}
            {passwordStrength && (
              <p
                className={`mt-1 text-sm text-${getStrengthColor(passwordStrength)}-600`}
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
            <label htmlFor="confirmPassword" className="text-secondary-70">
              Confirm Password
            </label>
            <div className="relative mt-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm new password"
                className={`w-full rounded-[10px] border border-neutral-40 px-[12px] py-[18px] ${
                  passwordsMatch ? "" : "border-red-500"
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility(setShowConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
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
        </form>
      </div>

      {/* Add a gap here */}
      <div className="h-6"></div>

      <div className="flex items-center gap-x-[24px] px-[24px] pb-[24px]">
        <button
          onClick={handleDiscard}
          className={`rounded-[59px] px-[32px] py-[10px] ${
            formChanged
              ? "bg-neutral-10 text-secondary-120"
              : "bg-neutral-20 text-secondary-30"
          }`}
        >
          Discard Changes
        </button>
        <button
          onClick={handleSubmit}
          disabled={!formChanged || !passwordsMatch || isSameAsCurrentPassword}
          className={`rounded-[59px] px-[32px] py-[10px] ${
            formChanged && passwordsMatch && !isSameAsCurrentPassword
              ? "bg-primary-100 text-[#FFFFFF]"
              : "bg-primary-40 text-transparent-white-50"
          }`}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
