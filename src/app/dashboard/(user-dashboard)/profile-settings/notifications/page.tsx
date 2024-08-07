"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import ToggleSwitch from "~/components/toggle/ToggleSwitch";

const Notifications = () => {
  const [isChanged, setIsChanged] = useState(false);

  const handleInteraction = () => {
    setIsChanged(true);
  };

  return (
    <div className="min-h-[750px] rounded-[18px] bg-[#FFFFFF] pb-[95px]">
      <div className="rounded-t-[18px] bg-primary-10 px-[20px] py-[32px]">
        <p className="text-[22px]">Email Notifications</p>
      </div>
      <div className="flex flex-col gap-y-[12px] p-[24px]">
        <p className="text-secondary-70">Notification Type</p>
        <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
          <p className="text-[16px]">Achievement earned</p>
          <ToggleSwitch handleInteraction={handleInteraction} />
        </div>
        <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
          <p className="text-[16px]">Weekly progress report</p>
          <ToggleSwitch handleInteraction={handleInteraction} />
        </div>
        <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
          <p className="text-[16px]">New words learnt</p>
          <ToggleSwitch handleInteraction={handleInteraction} />
        </div>
        <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
          <p className="text-[16px]">Goal completion</p>
          <ToggleSwitch handleInteraction={handleInteraction} />
        </div>
        <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
          <p className="text-[16px]">Maintenance notification</p>
          <ToggleSwitch handleInteraction={handleInteraction} />
        </div>
        <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
          <p className="text-[16px]">Security alert</p>
          <ToggleSwitch handleInteraction={handleInteraction} />
        </div>
      </div>
      <div className="flex flex-col gap-y-[12px] px-[24px] py-[40px]">
        <p className="text-[14px] text-secondary-70">Notification Frequency</p>
        <div className="relative">
          <select
            className="w-full appearance-none rounded-[10px] border border-neutral-40 bg-transparent px-[12px] py-[18px] text-sm text-gray-700 focus:outline-none focus:ring-0"
            aria-label="Notification Type"
            onClick={() => handleInteraction()}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="other">Other</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform" />
        </div>
      </div>
      <div className="flex items-center gap-x-[24px] px-[24px] pb-[24px]">
        <button
          className={`rounded-[59px] px-[32px] py-[10px] ${
            isChanged
              ? "bg-neutral-10 text-secondary-120"
              : "bg-neutral-20 text-secondary-30"
          }`}
        >
          Discard Changes
        </button>
        <button
          className={`rounded-[59px] px-[32px] py-[10px] ${
            isChanged
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

export default Notifications;
