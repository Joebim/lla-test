import Link from "next/link";

const FourthHero = () => {
  return (
    <article className="mx-auto max-w-[1734px] bg-white px-[20px] py-[24px] lg:p-[40px]">
      <div className="border-8px flex flex-col items-center gap-[48px] border-solid border-transparent-black-15 bg-secondary-120 px-[12px] py-[28px] lg:flex-row lg:gap-[56px] lg:px-[80px] lg:py-[120px]">
        <div className="w-full max-w-[686px] text-center lg:text-start">
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
        </div>
        {/* flex flex-col gap-[40px] h-[56px] w-[213px]*/}
        <div className="w-full max-w-[746px]">
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
        </div>
      </div>
    </article>
  );
};
export default FourthHero;
