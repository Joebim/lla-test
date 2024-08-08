import React, { useEffect } from "react";

import useWindowWidth from "~/hooks/util-hooks/use-window-width";
import { handleMouseEnter } from "~/lib/utils";
import { particlesCanvas } from "./particles";

const Particles404 = () => {
  const canvaReference = React.useRef<HTMLCanvasElement>(null);
  const { winWidth } = useWindowWidth();

  useEffect(() => {
    setTimeout(() => {
      if (!canvaReference.current) return;
      particlesCanvas(canvaReference.current);
    }, 500);
  }, [winWidth]);
  return (
    <div className="absolute left-0 top-0 mx-auto h-full w-full overflow-hidden">
      <canvas
        ref={canvaReference}
        id="particles_404"
        className="absolute left-0 top-0 h-[100dvh] w-full"
      />
      <header className="absolute left-0 top-0 w-full bg-black px-10 py-8 font-medium uppercase text-[#f97415] md:text-3xl xl:text-4xl xl:font-bold">
        <h1
          className="w-fit"
          // @ts-expect-error Hacking the type
          onMouseEnter={handleMouseEnter}
          data-value="DELVE"
        >
          Delve
        </h1>
      </header>
      <div className="absolute bottom-10 left-10 font-sans text-2xl uppercase">
        <p
          className="font-bold text-[#f97415] md:text-6xl lg:text-9xl xl:text-[10rem]"
          // @ts-expect-error Hacking the type
          onMouseEnter={handleMouseEnter}
          data-value="404!!"
        >
          404
        </p>
        <p className="rounded-md pt-1 font-medium text-[#f97415] backdrop-blur-xl md:text-3xl lg:text-4xl">
          This is not the page <br /> you are looking for
        </p>
      </div>
    </div>
  );
};

export default Particles404;
