"use client";

import { useEffect } from "react";

import { animatePageIn } from "~/lib/animations";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="fixed left-0 top-0 z-[9999] min-h-[100dvh] w-1/4 bg-neutral-950"
      />

      <div
        id="banner-2"
        className="fixed left-1/4 top-0 z-[9999] flex min-h-[100dvh] w-1/4 items-center justify-end bg-neutral-950 text-3xl font-bold text-white md:text-[10vw] 2xl:text-9xl"
      >
        DEL
      </div>

      <div
        id="banner-3"
        className="fixed left-2/4 top-0 z-[9999] flex min-h-[100dvh] w-1/4 items-center bg-neutral-950 text-3xl font-bold text-white md:text-[10vw] 2xl:text-9xl"
      >
        VE
      </div>

      <div
        id="banner-4"
        className="fixed left-3/4 top-0 z-[9999] min-h-[100dvh] w-1/4 bg-neutral-950"
      />
      {children}
    </div>
  );
};

export default Template;
