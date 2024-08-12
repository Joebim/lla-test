"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import LightNav from "~/components/light-navbar/LightNav";
import aboutImg from "../../../../public/images/aboutAsset/about.svg";

const FirstHero = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const sectionReference = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Animate the left section
            controlsLeft.start({
              x: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: "easeOut" },
            });

            // Animate the right section
            controlsRight.start({
              x: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: "easeOut" },
            });
          }
        }
      },
      { threshold: 0.2 },
    );

    if (sectionReference.current) {
      observer.observe(sectionReference.current);
    }
    return () => {
      if (sectionReference.current) {
        observer.unobserve(sectionReference.current);
      }
    };
  }, [controlsLeft, controlsRight]);
  return (
    <header className="mx-auto flex w-full max-w-[1734px] gap-[10px] bg-secondary-120 p-[12px] lg:p-[40px]">
      <div className="flex w-full flex-col gap-[48px] border-transparent-white-15 bg-white py-[12px] md:pb-[48px] lg:gap-[64px] lg:border-[8px] lg:border-solid">
        <LightNav className="relative mx-auto w-full max-w-[1654px] bg-white" />
        <div className="">
          <h1 className="text-center font-axiformaSemiBold text-[32px] font-bold leading-[48px] tracking-[0.06em] lg:text-[64px] lg:leading-[96px]">
            About Us
          </h1>
          <div
            ref={sectionReference}
            className="flex w-full max-w-[1648px] flex-col gap-[40px] px-[20px] py-[24px] lg:flex-row lg:items-center lg:gap-[100px] lg:px-[80px]"
          >
            <div className="w-full lg:w-[601px]">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={controlsLeft}
                className="text-center font-axiformaSemiBold text-[16px] font-semibold leading-[24px] tracking-[0.04em] text-transparent-black-75 md:text-[24px] md:leading-[36px] lg:text-start"
              >
                At Delve, <strong className="text-black">we </strong>
                revolutionize language learning
                <strong className="text-black">
                  {" "}
                  by transforming it into an{" "}
                </strong>
                immersive and engaging adventure.
                <strong className="text-black">
                  {" "}
                  Our innovative platform uses interactive{" "}
                </strong>
                3D environments and captivating storytelling
                <strong className="text-black">
                  {" "}
                  to make learning fun and effective.
                </strong>
              </motion.p>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={controlsRight}
              className="w-full max-w-[808px]"
            >
              <Image
                src={aboutImg}
                alt="game img"
                className="w-full"
                width={100}
                height={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default FirstHero;
