"use client";

import { useEffect, useState } from "react";

import useWindowHeight from "~/hooks/util-hooks/use-window-height";
import { cn } from "~/lib/utils";

const handleTop = () => {
  window && window.scroll({ top: 0, behavior: "smooth" });
};
const GotoTop = () => {
  const { scrollY } = useWindowHeight();

  const [hideToTop, setHideToTop] = useState(false);

  useEffect(() => {
    let previousScrollpos = window.scrollY;
    // console.log("PREV", prevScrollpos);
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.scrollY;

      if (previousScrollpos >= currentScrollPos) {
        setHideToTop(false);
      } else {
        setHideToTop(true);
      }
      previousScrollpos = currentScrollPos;
    });
  }, []);

  return hideToTop ? undefined : (
    <div
      role="button"
      onClick={handleTop}
      className={cn(
        "border-primary transition-all fixed bottom-12 right-2 isolate z-[9999] mx-auto grid size-10 max-w-[1440px] select-none place-items-center items-center rounded border bg-white text-2xl mix-blend-difference duration-1000 active:scale-95 active:duration-300 max-[400px]:bottom-16 sm:bottom-16 sm:right-5 sm:text-4xl",
        scrollY > 1000
          ? "translate-x-0 opacity-100 shadow-[0_0_40px_0_rgba(0,0,0,0.16)]"
          : "translate-x-20 opacity-0",
      )}
    >
      {/* <ChevronUp stroke="white" />*/}
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2.5' stroke='cyan'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M18 15l-6-6-6 6'/%3E%3C/svg%3E")`,
        }}
        className="transition-opacity pointer-events-none size-8 duration-500 [mix-blend-mode:difference]"
      />
    </div>
  );
};

export default GotoTop;
