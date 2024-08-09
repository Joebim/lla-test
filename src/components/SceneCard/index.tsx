import CustomButton from "~/components/common/common-button/common-button";

interface cardProperties {
  levels: number;
  wordNos?: number;
  description: string;
}

const SceneCard = ({ levels, wordNos, description }: cardProperties) => {
  return (
    <section
      className="relative h-fit max-sm:max-w-[375px] sm:max-w-[600px]"
      data-testid="mobile-element"
    >
      <div className="absolute inset-0 bg-black p-4 opacity-75 sm:rounded-[28px] lg:p-6"></div>
      <div className="p-4 backdrop-blur-sm sm:rounded-[28px] lg:p-6">
        <p className="pb-6 pt-2 font-axiforma text-sm text-white md:text-base">
          {description}
        </p>
        <div className="mb-7 flex items-center gap-x-3 sm:mb-8">
          <p className="rounded-[10px] border border-transparent-white-20 bg-transparent-white-10 bg-opacity-10 px-3 py-1.5 font-axiformaMedium text-sm text-white sm:text-base">
            {levels} Page{levels > 1 ? "s" : ""}
          </p>
          {wordNos && (
            <>
              <div className="h-[9px] w-[9px] rounded-full border bg-transparent"></div>
              <p className="rounded-[10px] border border-transparent-white-20 bg-transparent-white-10 bg-opacity-10 px-3 py-1.5 font-axiformaMedium text-sm text-white sm:text-base">
                {wordNos} words
              </p>
            </>
          )}
        </div>
        <CustomButton
          variant="primary"
          className="w-full py-6 font-axiformaSemiBold text-lg"
        >
          Start Quest
        </CustomButton>
      </div>
    </section>
  );
};

export default SceneCard;
