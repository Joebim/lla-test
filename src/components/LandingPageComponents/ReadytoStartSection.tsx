import Link from "next/link";

import CustomButton from "../common/common-button/common-button";

const ReadytoStartSection = () => {
  return (
    <div className="w-full bg-secondary-100 p-4 sm:p-6 md:p-10">
      <div className="w-full bg-white px-4 py-20 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 lg:flex-row lg:gap-0">
          <div className="flex flex-col items-start justify-center gap-5 lg:w-1/2">
            <h1 className="text-center font-axiformaSemiBold text-2xl font-semibold leading-tight tracking-wide text-secondary-60 sm:text-3xl md:text-4xl lg:text-left">
              Ready To{" "}
              <b className="text-secondary-120">
                Start Your Language Adventure?
              </b>
            </h1>
            <Link href="/signup">
              <CustomButton
                variant="primary"
                size="lg"
                className="hidden sm:flex"
              >
                Delve In
              </CustomButton>
            </Link>
          </div>
          <p className="max-w-[312px] text-center font-axiformaMedium text-sm font-normal leading-relaxed sm:text-base md:max-w-[700px] lg:w-1/2 lg:text-left">
            Dive in now and play the game to explore different quests, beat the
            clock, and master new languages with ease. Start your journey today!
          </p>
          <Link href="/signup">
            <CustomButton
              variant="primary"
              size="default"
              className="flex w-[90%] sm:hidden"
            >
              Delve In
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadytoStartSection;
