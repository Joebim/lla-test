"use client";

import { useState } from "react";

interface ToggleSwitchProperties {
  variant?: "default" | "bordered";
  handleInteraction?: () => void;
}

const ToggleSwitch = ({
  variant = "default",
  handleInteraction,
}: ToggleSwitchProperties) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((previousIsOn) => {
      const newIsOn = !previousIsOn;
      if (handleInteraction) handleInteraction();
      return newIsOn;
    });
  };

  return (
    <div
      role="button"
      className={`flex h-[20px] w-[36px] cursor-pointer items-center rounded-full p-[2px] ${
        isOn ? "bg-orange-500" : "bg-neutral-40"
      } ${variant === "bordered" ? (isOn ? "border-primary-20" : "border-orange-500") : ""} ${
        variant === "bordered" ? "border-2" : ""
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`shadow-md h-[16px] w-[16px] transform rounded-full bg-white duration-300 ease-in-out ${
          isOn ? "translate-x-4" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
