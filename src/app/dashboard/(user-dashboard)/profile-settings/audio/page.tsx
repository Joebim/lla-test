"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

  const handleInteraction = () => {
    setIsChanged(true);
  };

  const handleSaveClick = () => {
    if (isChanged) {
      setIsDialogOpen(true);
    }
  };
  return (
    <>
      <div className="bg h-[750px] rounded-[18px] border bg-[#FFFFFF] pb-[24px]">
        <div className="rounded-t-[18px] bg-primary-10 px-[20px] py-[32px]">
          <p className="text-[22px]">Audio</p>
        </div>
        <div className="flex flex-col gap-y-[12px] p-[24px]">
          <p className="text-secondary-70">Microphone Status</p>
          <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
            <p className="text-[16px]">Mic</p>
            <ToggleSwitch handleInteraction={handleInteraction} />
          </div>
          <p className="text-secondary-70">Audio Preferences</p>
          <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
            <p className="text-[16px]">Music</p>
            <ToggleSwitch handleInteraction={handleInteraction} />
          </div>
          <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
            <p className="text-[16px]">Sound effects</p>
            <ToggleSwitch handleInteraction={handleInteraction} />
          </div>
          <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[18px]">
            <p className="text-[16px]">Ambient sound</p>
            <ToggleSwitch handleInteraction={handleInteraction} />
          </div>
        </div>
        <div className="flex flex-col gap-y-[12px] px-[24px] py-[40px]">
          <p className="text-[14px] text-secondary-70">Notification Type</p>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-[10px] border border-neutral-40 bg-transparent px-[12px] py-[18px] text-sm text-gray-700 focus:outline-none focus:ring-0"
              aria-label="Notification Type"
              onChange={handleInteraction}
            >
              <option value="snooze">Snooze</option>
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
            onClick={handleSaveClick}
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="b flex items-center justify-center border-0 p-4">
          <div className="w-full max-w-md rounded-[18px] border-0 bg-white px-[36px] pb-[32px] pt-[48px]">
            <DialogTitle className="mb-4 flex justify-center text-lg font-semibold">
              <Image
                src={"/images/_check.svg"}
                alt="check"
                width={80}
                height={80}
              />
            </DialogTitle>
            <p className="mb-6 text-center text-[28px]">
              Your audio settings have been successfully updated.
            </p>
            <div className="flex justify-center gap-x-4">
              <DialogClose asChild>
                <button
                  className="rounded-[59px] bg-secondary-110 px-[32px] py-[10px] text-[18px] text-[#FFFFFF]"
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

      <div className="shadow-md mt-[48px] rounded-[18px] border bg-white pb-[24px]">
        <div className="rounded-t-[18px] bg-primary-10 px-[10px] py-[20px]">
          <p className="text-[20px]">Your invite Link</p>
        </div>
        <div className="flex flex-col gap-y-[12px] px-[12px] py-[24px]">
          <p className="text-[16px]">
            Share this link with your friends to invite them to join Delve
          </p>
          <div className="flex items-center justify-between rounded-[10px] border border-neutral-40 px-[12px] py-[14px]">
            <p className="text-[16px]">
              https:/www.delveapp.com/invite?referralCode=12345ABCDE
            </p>
            <div className="flex items-center gap-x-[12px]">
              <Image
                src={"/images/_Icons.svg"}
                alt="copy"
                width={20}
                height={20}
              />
              <Image
                src={"/images/_Icons (1).svg"}
                alt="copy"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPage;
