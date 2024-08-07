"use client";

import Image from "next/image";

import VolumeBar from "../miscellaneous/Volume";

interface ProgressBoxProperties {
  level: number;
  progressStarted: boolean;
  progress: number;
}

export default function ProgressBox({
  level,
  progressStarted,
  progress,
}: ProgressBoxProperties) {
  return (
    <div className="flex w-[20%] flex-col items-center rounded-l-[86px] rounded-r-[40px] border-[10px] border-primary-100 bg-primary-60">
      <div className="flex w-full items-center gap-4 px-2 py-2">
        <Image
          src="/logo/profile.svg"
          alt="profile icon"
          width={84}
          height={84}
          className="mr-2"
        />
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-bold leading-9 text-primary-130">
            The Burning building
          </p>
          {progressStarted && (
            <>
              <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-transparent-black-60">
                  Lvl {level}
                </p>
                <VolumeBar value={progress} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
