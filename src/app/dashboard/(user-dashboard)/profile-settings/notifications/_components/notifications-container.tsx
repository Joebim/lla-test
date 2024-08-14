"use client";

import Image from "next/image";
import { useState } from "react";

import SettingsCard from "~/components/profileSettings/settings-card";
import ToggleSwitch from "~/components/toggle/ToggleSwitch";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const NotificationContainer = () => {
  const [toggleStates, setToggleStates] = useState(
    Array.from({ length: 6 }).fill(false),
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const notificationItems = [
    "Achievement earned",
    "Weekly progress report",
    "New words learnt",
    "Goal completion",
    "Maintenance notification",
    "Security alert",
  ];

  const handleInteraction = (index: number) => {
    setToggleStates((previousStates) =>
      previousStates.map((state, index_) =>
        index_ === index ? !state : state,
      ),
    );
  };

  const handleSaveClick = () => {
    setIsDialogOpen(true);
  };

  const handleDiscardChange = () => {
    setToggleStates(Array.from({ length: 6 }).fill(false));
  };

  return (
    <>
      <SettingsCard title="Email Notifications">
        <div className="flex flex-col gap-y-[10px] md:gap-y-[12px]">
          <p className="text-[14px] text-secondary-70 md:text-[16px]">
            Notification Type
          </p>
          {notificationItems.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center justify-between rounded-[8px] border border-neutral-40 px-[8px] py-[14px] md:rounded-[10px] md:px-[12px] md:py-[18px]"
              onClick={() => handleInteraction(index)}
            >
              <p className="text-[14px] md:text-[16px]">{item}</p>
              <ToggleSwitch
                isChanged={toggleStates[index] as boolean}
                handleInteraction={() => handleInteraction(index)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-[10px] py-[30px] md:gap-y-[12px] md:py-[40px]">
          <p className="text-[12px] text-secondary-70 md:text-[14px]">
            Notification Frequency
          </p>
          <div className="relative">
            <Select>
              <SelectTrigger
                className="w-full appearance-none rounded-[8px] border border-neutral-40 bg-transparent px-[8px] py-[14px] text-[14px] text-gray-700 focus:outline-none focus:ring-0 md:rounded-[10px] md:px-[12px] md:py-[18px] md:text-sm"
                aria-label="Notification Type"
              >
                <SelectValue placeholder="Snooze" />
              </SelectTrigger>
              <SelectContent className="rounded-[8px] bg-white">
                <SelectGroup>
                  <SelectItem
                    value="Snooze"
                    className="rounded-[8px] bg-primary-10"
                  >
                    Snooze
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-x-[16px] gap-y-[10px] whitespace-nowrap max-[450px]:flex-col-reverse min-[450px]:flex-row md:gap-x-[24px] md:gap-y-0">
          <button
            className={`w-full rounded-[40px] px-[18px] py-[8px] text-sm min-[450px]:w-auto md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-base ${
              toggleStates.includes(true)
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
              toggleStates.includes(true)
                ? "bg-primary-100 text-[#FFFFFF]"
                : "bg-primary-40 text-transparent-white-50"
            }`}
          >
            Save Changes
          </button>
        </div>
      </SettingsCard>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="flex max-w-[600px] items-center justify-center border-0 p-4 font-axiforma lg:w-[600px]">
          <div className="w-full max-w-md rounded-[12px] border-0 bg-white px-[24px] pb-[24px] pt-[36px] md:rounded-[18px] md:px-[36px] md:pb-[32px] md:pt-[48px]">
            <DialogTitle className="mb-4 flex justify-center font-semibold">
              <Image
                src={"/images/_check.svg"}
                alt="check"
                width={80}
                height={80}
              />
            </DialogTitle>
            <p className="mb-6 text-center font-axiformaBold text-[18px] font-bold leading-[38px] tracking-[0.8px] md:text-[20px] md:tracking-[1.12px] lg:leading-[42px]">
              Your notification settings have been successfully updated.
            </p>
            <DialogClose className="mt-[48px] flex w-full justify-center gap-x-4">
              <div className="w-full">
                <div
                  className="w-full rounded-[40px] bg-secondary-110 px-[24px] py-[8px] text-center text-[14px] text-[#FFFFFF] md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-[16px]"
                  onClick={() => {
                    setIsDialogOpen(false);
                  }}
                >
                  Close
                </div>
              </div>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NotificationContainer;
