"use client";

import Image from "next/image";

import fireColored from "../../../../../../public/dashboard/fire-colored.svg";
import fireNeutral from "../../../../../../public/dashboard/fire-neutral.svg";
import flags from "../../../../../../public/dashboard/flags.svg";
import translate from "../../../../../../public/dashboard/translate.png";

export default function WelcomeBackBar() {
  const firstName = "Desmond";

  const screenWidth = window.innerWidth;

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between rounded-[18px] bg-transparent px-0 sm:bg-white sm:p-[18px]">
        <div className="hidden sm:block">
          <h1 className="stroke-neutral-50 text-[22px] font-bold text-black">
            Hello, <span className="text-primary-100">{firstName}</span>
          </h1>
        </div>

        <div className="">
          <Image
            src={flags}
            height={40}
            width={40}
            alt={"Fire Neutral"}
            className="block sm:hidden"
          />
        </div>
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row items-center justify-between gap-[10px] sm:justify-start">
            <div className="flex items-center justify-center rounded-full bg-transparent-black-5 p-[2px]">
              {screenWidth > 640 ? (
                <Image
                  src={fireNeutral}
                  height={20}
                  width={20}
                  alt={"Fire Neutral"}
                />
              ) : (
                <Image
                  src={fireColored}
                  height={20}
                  width={20}
                  alt={"Fire Neutral"}
                />
              )}
            </div>
            <p className="text-[14px]">{screenWidth > 640 ? 0 : 4} days</p>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <div className="flex items-center justify-center rounded-full bg-transparent-black-5 p-[2px]">
              <Image src={translate} height={20} width={20} alt={"Translate"} />
            </div>
            <p className="text-[14px]">{screenWidth > 640 ? 0 : 4} Words</p>
          </div>
        </div>
      </div>
    </>
  );
}
