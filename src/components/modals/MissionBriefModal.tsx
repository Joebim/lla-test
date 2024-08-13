"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import Image from "next/image";

import CustomButton from "../common/common-button/common-button";

const MissionBriefModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomButton variant="primary-two">Mission Brief</CustomButton>
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0" />
      <DialogContent className="transition-all max-w-sm gap-2 bg-neutral-10 p-0 outline-none sm:max-w-[702px] sm:rounded-3xl">
        <DialogTitle className="sr-only">Mission Brief</DialogTitle>
        <DialogDescription className="sr-only">
          Detailed mission briefing and instructions.
        </DialogDescription>
        <div className="w-full max-w-[896px]">
          <div className="relative">
            <div className="bg-black-140 absolute left-0 right-0 bg-opacity-50 text-center">
              <Image
                src="/images/modal-images/Frame 13.png"
                alt="Mission Brief"
                width={300}
                height={42}
                className="inline-block"
              />
            </div>
            <div className="bg-black-140 overflow-hidden rounded-lg bg-opacity-50">
              <div className="mt-16 rounded-lg border border-[#E27C40] bg-black bg-opacity-80 p-6 text-center text-white sm:p-8 md:p-12 lg:px-[100px] lg:pb-12 lg:pt-16">
                <div className="mb-6 space-y-4">
                  <p className="font-inter text-lg font-medium leading-normal tracking-[1.28px] text-[#BEBEBE] sm:text-2xl sm:leading-relaxed md:text-[28px] md:leading-[1.4] lg:text-[32px] lg:leading-[48px]">
                    Welcome, Alex! A fire has broken out in an apartment
                    building in your neighborhood. A baby is trapped inside and
                    needs your help.
                  </p>
                  <p className="font-inter text-lg font-medium leading-normal tracking-[1.28px] text-[#BEBEBE] sm:text-2xl sm:leading-relaxed md:text-[28px] md:leading-[1.4] lg:text-[32px] lg:leading-[48px]">
                    Your mission: Go into the burning building and rescue the
                    baby. Every second counts!
                  </p>
                  <p className="font-inter text-lg font-medium leading-normal tracking-[1.28px] text-[#BEBEBE] sm:text-2xl sm:leading-relaxed md:text-[28px] md:leading-[1.4] lg:text-[32px] lg:leading-[48px]">
                    To succeed, you must learn to understand and speak the words
                    that would serve as your tool.
                  </p>
                </div>
                <Image
                  src="/images/modal-images/fast forward story.png"
                  alt="Fast Forward"
                  width={50}
                  height={50}
                  className="inline-block cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MissionBriefModal;
