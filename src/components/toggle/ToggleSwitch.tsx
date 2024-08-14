/* eslint-disable unicorn/no-negated-condition */
"use client";

import { useEffect, useState } from "react";

interface ToggleSwitchProperties {
  variant?: "default" | "bordered";
  isChanged?: boolean;
  handleInteraction?: () => void;
  onChange?: (isEnabled: boolean) => void;
}

const ToggleSwitch = ({
  variant = "default",
  isChanged,
  handleInteraction,
  onChange,
}: ToggleSwitchProperties) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (!isChanged) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }, [isChanged, handleInteraction]);

  const toggleSwitch = () => {
    setIsOn((previousIsOn) => {
      const newIsOn = !previousIsOn;
      if (handleInteraction) handleInteraction();
      if (onChange) onChange(newIsOn);
      return newIsOn;
    });
  };

  return (
    <div
      role="button"
      className={`flex h-[20px] w-[36px] cursor-pointer items-center rounded-full p-[2px] ${
        isOn ? "bg-orange-500" : "bg-neutral-40"
      } ${variant === "bordered" ? (isOn && isChanged ? "border-primary-20" : "border-orange-500") : ""} ${
        variant === "bordered" ? "border-2" : ""
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`shadow-md h-[16px] w-[16px] transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-4" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
