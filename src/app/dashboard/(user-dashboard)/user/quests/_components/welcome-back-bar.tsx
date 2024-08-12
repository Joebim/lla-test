"use client";

import Image from "next/image";
import { useState } from "react";

import fireColored from "../../../../../../../public/dashboard/fire-colored.svg";
import fireNeutral from "../../../../../../../public/dashboard/fire-neutral.svg";
import translate from "../../../../../../../public/dashboard/translate.png";

export default function WelcomeBackBar() {
  const [day] = useState(0);
  const firstName = "Desmond";

  return (
    <>
      <div className="hidden w-full flex-row items-center justify-between rounded-[18px] bg-white p-[18px] sm:flex">
        <div className="">
          <h1 className="stroke-neutral-50 text-[22px] font-bold text-black">
            Hello, <span className="text-primary-100">{firstName}</span>
          </h1>
        </div>
        <div className="flex flex-row gap-[42px]">
          <div className="flex flex-row items-center gap-[10px]">
            <div className="flex items-center justify-center rounded-full bg-transparent-black-5 p-[2px]">
              {day <= 0 ? (
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
            <p className="text-[14px]">0 days</p>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <div className="flex items-center justify-center rounded-full bg-transparent-black-5 p-[2px]">
              <Image src={translate} height={20} width={20} alt={"Translate"} />
            </div>
            <p className="text-[14px]">0 Words</p>
          </div>
        </div>
      </div>
    </>
  );
}
