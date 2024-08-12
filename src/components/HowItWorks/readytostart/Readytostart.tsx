"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

import CustomButton from "~/components/common/common-button/common-button";

const ReadyToStart = () => {
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
    <>
      <section
        ref={sectionReference}
        className="mb-[132px] hidden items-center gap-14 border-[40px] border-secondary-120 px-20 py-[120px] lg:flex"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={controlsLeft}
          className="flex flex-col gap-10"
        >
          <h3 className="text-[40px] font-semibold leading-[60px] tracking-tighter text-secondary-120">
            <span className="text-[40px] font-semibold leading-[60px] text-secondary-60">
              Ready To{" "}
            </span>
            Start Your Language Adventure?
          </h3>
          <Link href="/signup">
            <CustomButton variant="primary">Delve In</CustomButton>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={controlsRight}
          className="flex self-center lg:w-[746px]"
        >
          <p className="text-[18px] font-normal leading-[30px] tracking-tighter text-secondary-110">
            {" "}
            Dive in now and play the game to explore different quests, beat the
            clock, and master new languages with ease. Start your journey today!
          </p>
        </motion.div>
      </section>

      {/* mobile */}
      <section className="border-3 mb-[14px] flex w-full flex-col items-center justify-center gap-9 border-secondary-120 px-4 py-16 lg:hidden">
        <h3 className="text-center text-3xl font-semibold leading-[36px] text-secondary-120">
          <span className="text-3xl font-semibold leading-[36px] text-secondary-60">
            Ready To{" "}
          </span>
          Start Your Language Adventure?
        </h3>
        <p className="text-center text-[18px] font-normal leading-[30px] text-secondary-110">
          {" "}
          Dive in now and play the game to explore different quests, beat the
          clock, and master new languages with ease. Start your journey today!
        </p>
        <CustomButton className="w-full" variant="primary">
          Delve In
        </CustomButton>
      </section>
    </>
  );
};

export default ReadyToStart;
