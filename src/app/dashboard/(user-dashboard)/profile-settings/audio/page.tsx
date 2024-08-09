"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import InviteLink from "~/components/profileSettings/InviteLink";
import ToggleSwitch from "~/components/toggle/ToggleSwitch";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "~/components/ui/dialog";

const AudioPage = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const inviteLink = "https://www.delveapp.com/invite?referralCode=12345ABCDE";

  const handleInteraction = () => {
    setIsChanged(true);
  };

  const handleSaveClick = () => {
    setIsDialogOpen(true);
  };

  const handleDiscardChange = () => {
    if (isChanged) {
      setIsChanged(false);
    }
  };

  return (
    <>
      <div className="max-h-[750px] rounded-[12px] border bg-[#FFFFFF] pb-[8px] md:rounded-[18px] md:pb-[24px]">
        <div className="rounded-t-[12px] bg-primary-10 px-[16px] py-[24px] md:rounded-t-[18px] md:px-[20px] md:py-[32px]">
          <p className="text-[18px] md:text-[22px]">Audio</p>
        </div>
        <div className="flex flex-col gap-y-[10px] p-[16px] md:gap-y-[12px] md:p-[24px]">
          <p className="text-[14px] text-secondary-70 md:text-[16px]">
            Microphone Status
          </p>
          <div className="flex items-center justify-between rounded-[8px] border border-neutral-40 px-[8px] py-[14px] md:rounded-[10px] md:px-[12px] md:py-[18px]">
            <p className="text-[14px] md:text-[16px]">Mic</p>
            <ToggleSwitch handleInteraction={handleInteraction} />
          </div>
          <p className="text-[14px] text-secondary-70 md:text-[16px]">
            Audio Preferences
          </p>
          <div className="flex items-center justify-between rounded-[8px] border border-neutral-40 px-[8px] py-[14px] md:rounded-[10px] md:px-[12px] md:py-[18px]">
            <p className="text-[14px] md:text-[16px]">Music</p>
            <ToggleSwitch handleInteraction={handleInteraction} />
          </div>
          <div className="flex items-center justify-between rounded-[8px] border border-neutral-40 px-[8px] py-[14px] md:rounded-[10px] md:px-[12px] md:py-[18px]">
            <p className="text-[14px] md:text-[16px]">Sound effects</p>
            <ToggleSwitch handleInteraction={handleInteraction} />
          </div>
          <div className="flex items-center justify-between rounded-[8px] border border-neutral-40 px-[8px] py-[14px] md:rounded-[10px] md:px-[12px] md:py-[18px]">
            <p className="text-[14px] md:text-[16px]">Ambient sound</p>
            <ToggleSwitch handleInteraction={handleInteraction} />
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px] px-[16px] py-[30px] md:gap-y-[12px] md:px-[24px] md:py-[40px]">
          <p className="text-[12px] text-secondary-70 md:text-[14px]">
            Notification Type
          </p>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-[8px] border border-neutral-40 bg-transparent px-[8px] py-[14px] text-[14px] text-gray-700 focus:outline-none focus:ring-0 md:rounded-[10px] md:px-[12px] md:py-[18px] md:text-sm"
              aria-label="Notification Type"
              onChange={handleInteraction}
            >
              <option value="snooze">Snooze</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform" />
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-x-[16px] gap-y-[10px] whitespace-nowrap px-[16px] pb-[8px] max-[450px]:flex-col-reverse min-[450px]:flex-row md:gap-x-[24px] md:gap-y-0 md:px-[24px] md:pb-[24px]">
          <button
            className={`w-full rounded-[40px] px-[18px] py-[8px] text-sm min-[450px]:w-auto md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-base ${
              isChanged
                ? "bg-neutral-10 text-secondary-120"
                : "bg-neutral-20 text-secondary-30"
            }`}
            onClick={handleDiscardChange}
          >
            Discard Changes
          </button>
          <button
            onClick={handleSaveClick}
            className={`w-full whitespace-nowrap rounded-[40px] px-[18px] py-[8px] text-sm min-[450px]:w-auto md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-base ${
              isChanged
                ? "bg-primary-100 text-[#FFFFFF]"
                : "bg-primary-40 text-transparent-white-50"
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="flex items-center justify-center border-0 p-4">
          <div className="w-full max-w-md rounded-[12px] border-0 bg-white px-[24px] pb-[24px] pt-[36px] md:rounded-[18px] md:px-[36px] md:pb-[32px] md:pt-[48px]">
            <DialogTitle className="mb-4 flex justify-center text-lg font-semibold">
              <Image
                src={"/images/_check.svg"}
                alt="check"
                width={80}
                height={80}
              />
            </DialogTitle>
            <p className="mb-6 text-center text-[24px] md:text-[28px]">
              Your audio settings have been successfully updated.
            </p>
            <div className="flex justify-center gap-x-4">
              <DialogClose asChild>
                <button
                  className="rounded-[40px] bg-secondary-110 px-[24px] py-[8px] text-[16px] text-[#FFFFFF] md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-[18px]"
                  onClick={() => {
                    setIsDialogOpen(false);
                  }}
                >
                  Close
                </button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <InviteLink inviteLink={inviteLink} />
    </>
  );
};

export default AudioPage;
