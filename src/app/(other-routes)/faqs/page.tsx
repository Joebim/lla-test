import { FaqAccordions } from "./accordion";

const FAQs = () => {
  return (
    <>
      <div className="grid justify-items-center gap-y-6 pt-8 sm:gap-y-8 md:pt-12">
        <h1 className="font-axiformaBold text-4xl md:text-5xl lg:text-6xl">
          FAQs
        </h1>
        <p className="mx-auto inline-block rounded-[59px] border border-neutral-40 px-8 py-2.5 font-axiforma lg:py-3.5">
          <span className="text-secondary-80">Last updated:</span> 04 August,
          2024
        </p>
      </div>
      <div className="mx-auto max-w-3xl p-8 md:py-12 lg:py-12">
        <div className="grid gap-3 sm:pb-4">
          <h2 className="text-center font-axiformaSemiBold text-2xl lg:text-3xl">
            Introduction
          </h2>
          <p className="text-center text-sm sm:text-base">
            Welcome to our FAQ section! Here, we&apos;ve compiled answers to
            some of the most common questions about our AI-powered language
            learning game. Whether you&apos;re just starting or looking for
            advanced features, we hope this page will help you get the most out
            of your language learning journey.
          </p>
        </div>
        <FaqAccordions />
      </div>
    </>
  );
};

export default FAQs;
