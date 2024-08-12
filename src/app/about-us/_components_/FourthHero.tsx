"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

const FourthHero = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const sectionReference = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentSectionReference = sectionReference.current;

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

    if (currentSectionReference) {
      observer.observe(currentSectionReference);
    }

    return () => {
      if (currentSectionReference) {
        observer.unobserve(currentSectionReference);
      }
    };
  }, [controlsLeft, controlsRight]);

  return (
    <article className="mx-auto max-w-[1734px] bg-white px-[20px] py-[24px] lg:p-[40px]">
      <div
        ref={sectionReference}
        className="border-8px flex flex-col items-center gap-[48px] border-solid border-transparent-black-15 bg-secondary-120 px-[12px] py-[28px] lg:flex-row lg:gap-[56px] lg:px-[80px] lg:py-[120px]"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={controlsLeft}
          className="w-full max-w-[686px] text-center lg:text-start"
        >
          <h2 className="font-axiformaSemiBold text-[18px] font-semibold leading-[28px] tracking-[0.04em] text-white md:text-[40px] md:leading-[60px]">
            <span className="text-secondary-60">Ready To </span>Start Your
            Language Adventure?
          </h2>
          <Link
            href="/signup"
            className="mt-[40px] hidden w-[213px] justify-center rounded-[59px] border-b border-solid border-primary-120 bg-primary-100 px-[32px] py-[10px] text-[18px] leading-[28px] text-white lg:flex"
          >
            Delve In
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={controlsRight}
          className="w-full max-w-[746px]"
        >
          <p className="items-center text-center font-axiforma text-[14px] leading-[20px] text-white lg:text-start lg:text-[20px] lg:leading-[30px]">
            Dive in now and play the game to explore different quests, beat the
            clock, and master new languages with ease. Start your journey today!
          </p>

          <Link
            href="/signup"
            className="mt-[40px] block w-full rounded-[59px] border-b border-solid border-primary-120 bg-primary-100 px-[16px] py-[10px] text-[16px] leading-[24px] text-white lg:hidden"
          >
            Delve In
          </Link>
        </motion.div>
      </div>
    </article>
  );
};

export default FourthHero;
