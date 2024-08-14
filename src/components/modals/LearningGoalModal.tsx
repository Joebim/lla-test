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
import { useState } from "react";

import CustomButton from "../common/common-button/common-button";

const LearningGoalModal = () => {
  const [selectedGoal, setSelectedGoal] = useState<number | undefined>();

  const goals = [
    { words: "200 words Daily", level: "Good" },
    { words: "1000 words Weekly", level: "Great" },
    { words: "2000 words Monthly", level: "Amazing" },
  ];

  const handleGoalSelect = (index: number) => {
    setSelectedGoal(index);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomButton variant="primary-two">Learning Goals</CustomButton>
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0" />
      <DialogContent className="transition-all max-w-sm gap-2 bg-neutral-10 p-0 outline-none sm:max-w-[702px] sm:rounded-3xl">
        <DialogTitle className="hidden">Set Learning Goal</DialogTitle>

        <div className="flex w-full max-w-[719px] flex-col items-center justify-center gap-2 rounded-[18px] border-[1.8px] border-[#E27C40] bg-black p-6 sm:p-10 md:p-12 lg:p-16">
          <div className="mb-8 h-12 w-full max-w-[639px] sm:mb-12 md:mb-16">
            <DialogDescription className="bg-gradient-to-r from-[rgba(169,109,246,0.80)] to-[#D06D27] bg-clip-text text-center font-lilita text-3xl font-normal leading-none text-transparent sm:text-4xl md:text-5xl">
              Set Learning Goal
            </DialogDescription>
          </div>

          {goals.map((goal, index) => (
            <div
              key={index}
              className={`mb-4 flex w-full cursor-pointer justify-between p-4 font-lilita sm:p-5 ${
                selectedGoal === index
                  ? "rounded-[12px] border-[1.5px] border-[#529572] bg-white/[0.04] text-[#529572]"
                  : "text-[#BCBCBC]"
              } relative`}
              onClick={() => handleGoalSelect(index)}
            >
              <span>{goal.words}</span>
              <span>{goal.level}</span>
              {selectedGoal === index && (
                <div className="absolute -right-2 -top-2">
                  <Image
                    src="/images/modal-images/teenyicons_tick-circle-solid.png"
                    alt="Selected"
                    width={24}
                    height={24}
                  />
                </div>
              )}
            </div>
          ))}

          <button className="flex h-12 items-center justify-center gap-1.5 rounded-[59px] border-b border-[#5D00CC] bg-[#9000FF] px-6 font-inter text-white sm:px-8">
            Continue
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LearningGoalModal;
