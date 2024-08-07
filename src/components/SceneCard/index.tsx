import Link from "next/link";

import CustomButton from "~/components/common/common-button/common-button";

interface cardProperties {
  title: string;
  description: string;
  stage: number;
  levels: number;
  wordNos?: number;
}

const SceneCard = ({
  title,
  description,
  stage,
  levels,
  wordNos,
}: cardProperties) => {
  return (
    <section
      className="relative h-fit max-sm:max-w-[375px] sm:max-w-[600px]"
      data-testid="mobile-element"
    >
      <div className="absolute inset-0 bg-black p-6 opacity-75 sm:rounded-[28px]"></div>
      <div className="p-6 backdrop-blur-sm sm:rounded-[28px]">
        <h3 className="font-axiformaBold text-2xl text-primary-100 md:text-3xl">
          {title}
        </h3>
        <p className="pb-6 pt-2 font-axiforma text-sm text-white md:text-base">
          {description}
        </p>
        <div className="mb-7 flex items-center gap-x-3 sm:mb-8">
          <p className="rounded-[10px] border border-transparent-white-20 bg-transparent-white-10 bg-opacity-10 px-3 py-1.5 font-axiformaMedium text-sm text-white sm:text-base">
            {`${stage} / ${levels} Pages`}
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
        <div className="grid gap-5 sm:grid-cols-2">
          <Link href="/quest-external-page">
            <CustomButton
              variant="primary-two"
              className="w-full py-6 font-axiformaSemiBold text-lg"
            >
              Back
            </CustomButton>
          </Link>
          <CustomButton
            variant="primary"
            className="w-full py-6 font-axiformaSemiBold text-lg"
          >
            Start Quest
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default SceneCard;
