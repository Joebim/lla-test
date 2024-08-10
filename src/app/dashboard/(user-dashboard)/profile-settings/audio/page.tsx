/* eslint-disable unicorn/new-for-builtins */
/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import { useState } from "react";

import InviteLink from "~/components/profileSettings/InviteLink";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import ToggleSwitch from "~/components/toggle/ToggleSwitch";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "~/components/ui/dialog";

const AudioPage = () => {

  const [toggleStates, setToggleStates] = useState(Array<boolean>(6).fill(false));
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const inviteLink = "https://www.delveapp.com/invite?referralCode=12345ABCDE";

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
    setToggleStates(Array<boolean>(6).fill(false));
  };

  // Structure data
  const audioSections = [
    {
      title: "Microphone Status",
      items: [{ name: "Mic", index: 0 }],
    },
    {
      title: "Audio Preferences",
      items: [
        { name: "Music", index: 1 },
        { name: "Sound effects", index: 2 },
        { name: "Ambient sound", index: 3 },
      ],
    },
  ];

  return (
    <>
      <div className="max-h-[750px] rounded-[12px] border bg-[#FFFFFF] pb-[8px] md:rounded-[18px] md:pb-[24px]">
        <div className="rounded-t-[12px] bg-primary-10 px-[16px] py-[24px] md:rounded-t-[18px] md:px-[20px] md:py-[32px]">
          <p className="text-[18px] md:text-[22px]">Audio</p>
        </div>
        <div className="flex flex-col gap-y-[10px] p-[16px] md:gap-y-[40px] md:p-[24px]">
          {audioSections.map((section) => (
            <div key={section.title}>
              <p className="text-[14px] text-secondary-70 md:text-[16px]">
                {section.title}
              </p>
              <div className="mt-[12px] flex flex-col gap-y-4 cursor-pointer">
                {section.items.map((item) => (
                  <div
                    key={item.index}
                    className="flex items-center justify-between rounded-[8px] border border-neutral-40 px-[8px] py-[14px] md:rounded-[10px] md:px-[12px] md:py-[18px]"
                    onClick={() => handleInteraction(item.index)}
                  >
                    <p className="text-[14px] md:text-[16px]">{item.name}</p>
                    <ToggleSwitch
                      isChanged={toggleStates[item.index]}
                      handleInteraction={() => handleInteraction(item.index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-[10px] px-[16px] py-[30px] md:gap-y-[12px] md:px-[24px] md:py-[40px]">
          <p className="text-[12px] text-secondary-70 md:text-[14px]">
            Notification Type
          </p>
          <div className="relative">
            <Select>
              <SelectTrigger className="w-full appearance-none rounded-[8px] border border-neutral-40 bg-transparent px-[8px] py-[14px] text-[14px] text-gray-700 focus:outline-none focus:ring-0 md:rounded-[10px] md:px-[12px] md:py-[18px] md:text-sm"
                aria-label="Notification Type">
                <SelectValue placeholder="Weekly" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Daily">Daily</SelectItem>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-x-[16px] gap-y-[10px] whitespace-nowrap px-[16px] pb-[8px] max-[450px]:flex-col-reverse min-[450px]:flex-row md:gap-x-[24px] md:gap-y-0 md:px-[24px] md:pb-[24px]">
          <button
            className={`w-full rounded-[40px] px-[18px] py-[8px] text-sm min-[450px]:w-auto md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-base ${toggleStates.includes(true)
              ? "bg-neutral-10 text-secondary-120"
              : "bg-neutral-20 text-secondary-30"
              }`}
            onClick={handleDiscardChange}
          >
            Discard Changes
          </button>
          <button
            onClick={handleSaveClick}
            className={`w-full whitespace-nowrap rounded-[40px] px-[18px] py-[8px] text-sm min-[450px]:w-auto md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-base ${toggleStates.includes(true)
              ? "bg-primary-100 text-[#FFFFFF]"
              : "bg-primary-40 text-transparent-white-50"
              }`}
          >
            Save Changes
          </button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogClose className="absolute top-0 right-0 hidden" />
        <DialogContent className="max-w-[600px] lg:w-[600px] flex items-center justify-center border-0 p-4 font-axiforma">
          <div className="w-full max-w-md rounded-[12px] border-0 bg-white px-[24px] pb-[24px] pt-[36px] md:rounded-[18px] md:px-[36px] md:pb-[32px] md:pt-[48px]">
            <DialogTitle className="mb-4 flex justify-center font-semibold">
              <Image
                src={"/images/_check.svg"}
                alt="check"
                width={80}
                height={80}
              />
            </DialogTitle>
            <p className="mb-6 text-center font-bold text-[18px] md:text-[20px] font-axiformaBold tracking-[0.8px] md:tracking-[1.12px] leading-[38px] lg:leading-[42px]">
              Your audio settings have been successfully updated.
            </p>
            <DialogClose className="flex justify-center gap-x-4 mt-[48px] w-full">
              <div className="w-full">
                <div
                  className="w-full text-center rounded-[40px] bg-secondary-110 px-[24px] py-[8px] text-[14px] text-[#FFFFFF] md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-[16px]"
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

      <InviteLink inviteLink={inviteLink} />
    </>
  );
};

export default AudioPage;
