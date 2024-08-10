import CustomButton from "~/components/common/common-button/common-button";

const ReadyToStart = () => {
  return (
    <div className="bg-white py-10">
      <div className="border-y-8 border-transparent-black-15 md:border-x-8">
        <div className="grid items-center bg-secondary-120 px-6 py-10 text-white sm:px-12 sm:py-16 md:gap-9 lg:grid-cols-2 lg:gap-12 lg:px-14 lg:py-20">
          <div className="flex flex-col gap-6 max-lg:items-center *:max-lg:text-center">
            <h2 className="font-axiformaSemiBold text-2xl md:text-3xl">
              <span className="text-secondary-60">Ready To</span> Start Your
              Language <br /> Adventure?
            </h2>
            <p className="font-axiforma text-base max-lg:text-balance lg:hidden">
              Dive in now and play the game to explore different quests, beat
              the clock, and master new languages with ease. Start your journey
              today!
            </p>
            <CustomButton className="max-md:mt-4" variant="primary">
              Delve In
            </CustomButton>
          </div>
          <p className="font-axiforma text-sm max-lg:hidden sm:text-base">
            Dive in now and play the game to explore different quests, beat the
            clock, and master new languages with ease. Start your journey today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
