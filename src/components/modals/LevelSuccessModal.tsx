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
import { FC } from "react";

import CustomButton from "../common/common-button/common-button";

interface ModalProperties {
  onClose: () => void;
}

const Modal: FC<ModalProperties> = ({ onClose }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomButton variant="primary-two">Level Success</CustomButton>
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0 w-fit bg-black bg-opacity-15" />
      <DialogContent className="max-w-sm gap-2 bg-neutral-10 p-0 outline-none transition-all sm:max-w-[702px] sm:rounded-3xl">
        <DialogTitle>Level Success</DialogTitle>
        <div className="relative w-full max-w-[600px] rounded-[4px] bg-[#E9EEF3] p-6 sm:p-8 md:p-[41px_75px_27px_75px]">
          <button
            className="absolute -right-4 -top-4 h-8 w-8 cursor-pointer"
            onClick={onClose}
          >
            <Image
              src="/images/modal-images/_Icons.png"
              alt="Close"
              width={50}
              height={50}
            />
          </button>
          <div className="flex flex-col items-center gap-8">
            <DialogDescription className="text-center font-lilita text-xl font-normal leading-[120%] tracking-[1.12px] text-[#595959] sm:text-2xl md:text-[28px]">
              Congratulations, Lingo Guru
              <br />
              You just completed Level 3
            </DialogDescription>
            <div className="relative aspect-square w-full max-w-[200px]">
              <Image
                src="/images/modal-images/Badges.png"
                alt="Badge"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="w-full max-w-[337px] text-center font-inter text-sm font-normal leading-6 text-[#888] sm:text-base">
              This is one of the ways you can earn badges. Take up challenges
              and quests and you can get more!
            </p>
            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white bg-[#5D00CC] px-4 py-3 font-inter text-sm font-semibold text-white shadow-[inset_0px_-3px_10px_#1F0451,inset_0px_3px_10px_rgba(214,192,255,0.25),0px_6px_4px_rgba(0,0,0,0.25)] sm:w-[262px] sm:text-base">
              Next level
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
