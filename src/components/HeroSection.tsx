/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { useHeroInView } from "~/hooks/util-hooks/use-hero-inview";
import useInView from "~/hooks/util-hooks/useInView";

const backgrounds = [
  {
    video: "/images/landing/firebgvideo8sec.mp4",
    thumbnail: "/images/landing/HeroBgHouseONFire.jpeg",
  },
  {
    video: "/images/landing/backgroundVideo1.mp4",
    thumbnail: "/images/landing/HeroInitBgImg.png",
  },
  {
    video: "/images/landing/backgroundVideo1.mp4",
    thumbnail: "/images/landing/HeroBgBedRoom.jpeg",
  },
  {
    video: "/images/landing/backgroundVideo1.mp4",
    thumbnail: "/images/landing/HeroBgAccident.jpeg",
  },
];

const HeroSection: React.FC = () => {
  const [activeBgIndex, setActiveBgIndex] = useState<number>(0);
  const videoReference = useRef<HTMLVideoElement>(null);
  const activeBg = backgrounds[activeBgIndex];
  const heroReference = useRef<HTMLHeadingElement>(null);
  const { updateHeroInView } = useHeroInView();
  const isHeroInView = useInView({
    ref: heroReference,
    once: false,
  });

  useEffect(() => {
    if (isHeroInView) {
      updateHeroInView(true);
    } else {
      updateHeroInView(false);
    }
  }, [isHeroInView]);

  return (
    <section className="mx-auto flex h-screen w-full flex-col items-center justify-center p-4">
      <div className="transition-all relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat duration-500 ease-in-out">
        <video
          ref={videoReference}
          className="absolute left-0 top-0 h-full w-full object-cover object-bottom"
          src={activeBg.video}
          autoPlay
          muted
          loop
          poster={activeBg.thumbnail}
        />
        <div className="absolute left-0 right-0 top-0 h-[60px] bg-gradient-to-b from-secondary-100 via-transparent-black-10 to-transparent opacity-85"></div>

        <h1
          ref={heroReference}
          className={`relative z-10 w-[370px] max-w-[400px] text-center font-axiformaMedium text-4xl font-semibold leading-tight tracking-wide text-white sm:w-full sm:max-w-[630px] sm:text-4xl sm:leading-snug md:text-5xl md:leading-normal lg:text-[62px] lg:leading-[90px]`}
        >
          Learn Languages The Fun Way
        </h1>

        <div className="absolute bottom-0 flex w-[90%] flex-col items-center justify-center rounded-t-[36px] border border-[#FFFFFF20] bg-[#212121D9] sm:w-[80%] md:w-[70%] lg:w-[408px]">
          <div className="flex w-full flex-row items-center justify-center space-x-2 px-2 pb-3 pt-5 sm:space-x-3 sm:px-3 md:space-x-4 md:px-4 lg:space-x-5 lg:px-5">
            {backgrounds.map((bg, index) => (
              <div
                key={index}
                className={`transition-all aspect-square w-[18%] cursor-pointer rounded-2xl bg-cover bg-center duration-300 sm:w-[20%] md:w-[22%] lg:w-[90px] ${activeBgIndex === index ? "border-2 border-white" : "border border-transparent"}`}
                onClick={() => setActiveBgIndex(index)}
              >
                <Image
                  className="h-full w-full rounded-2xl object-cover object-center"
                  src={bg.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>

          <div className="flex w-full flex-row items-center justify-center border-t border-[#FFFFFF40] py-2 sm:py-3 md:py-4">
            <h3 className="font-axiformaMedium text-sm text-white sm:text-base md:text-lg lg:text-[18px]">
              Explore Quests
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// ${ activeBgIndex === 2 ? 'text-black' : 'text-white' }
