import Image from "next/image";

import imgData from "../data";

const SecondHero = () => {
  return (
    <article className="mx-auto flex w-full max-w-[1734px] flex-col gap-[40px] px-[8px] py-[16px] lg:gap-[10px] lg:px-[40px] lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1654px] flex-col gap-[56px]">
        <div className="text-center">
          <h2 className="font-axiformaBold text-[28px] font-bold leading-[42px] tracking-[0.06em] md:text-[48px] md:leading-[72px]">
            Meet the <span className="text-primary-100">Team</span>
          </h2>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-[16px] bg-secondary-120 py-[20px] lg:gap-[32px] lg:px-[32px] lg:py-[60px]">
          {imgData.map((items) => {
            const { id, img, dept, name } = items;
            return (
              <div
                key={id}
                className="flex w-[45%] flex-col gap-[24px] text-center text-white duration-500 hover:scale-[1.02] md:w-[29%] lg:w-[22%] xl:w-[17%]"
              >
                <Image
                  src={img}
                  alt={name}
                  className="h-full w-full"
                  width={100}
                  height={100}
                />
                <div className="font-axiformaBold text-[20px] font-bold leading-[32px] tracking-[0.02em]">
                  <p className="truncate capitalize">{name}</p>
                  <p className="truncate font-axiforma font-normal capitalize tracking-[-0.01em]">
                    {dept}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
export default SecondHero;
