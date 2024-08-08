import Image from "next/image";

import LightNav from "~/components/light-navbar/LightNav";
import blog from "../../../../public/blog/Image.svg";

const FirstHero = () => {
  return (
    <header className="flex w-full flex-col items-center gap-[10px] bg-secondary-120 p-[12px] lg:p-[40px]">
      <div className="flex w-full flex-col gap-[48px] border-transparent-white-15 bg-white p-[12px] md:pb-[48px] lg:gap-[64px] lg:border-[8px] lg:border-solid">
        <LightNav className="relative mx-auto w-full max-w-[1654px] bg-white" />
        <div className="px-[13%] text-left">
          <h1 className="text-2xl font-bold tracking-[0.06em]">
            Useful Spanish Phrases To Learn
          </h1>
          <div className="mt-[12px] flex flex-col items-center gap-4 lg:flex-row">
            <h6 className="text-sm">Christian Wang</h6>
            <div className="h-2 w-2 rounded-full bg-primary-100"></div>
            <h6 className="text-sm">August 6, 2024</h6>
            <div className="h-2 w-2 rounded-full bg-primary-100"></div>
            <h6 className="text-sm">6 min read</h6>
          </div>
        </div>
        <div className="mt-6 flex w-full justify-center px-[13%]">
          <div className="w-full">
            <Image
              src={blog}
              layout="responsive"
              width={1000}
              height={800}
              alt="Articles Hero Image"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FirstHero;
