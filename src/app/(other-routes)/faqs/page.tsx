import { FaqAccordions } from "./accordion";

const FAQs = () => {
  return (
    <>
      <div className="grid justify-items-center gap-y-8 pt-24 md:pt-32">
        <h1 className="font-axiformaBold text-4xl md:text-5xl lg:text-6xl">
          FAQs
        </h1>
        <p className="mx-auto inline-block rounded-[59px] border border-neutral-40 px-8 py-2.5 font-axiforma lg:py-3.5">
          <span className="text-secondary-80">Last updated:</span> 04 August,
          2024
        </p>
      </div>
      <div className="mx-auto max-w-3xl p-6 md:py-9 lg:py-12">
        <div className="grid gap-3 md:gap-2">
          <h2 className="font-axiformaSemiBold text-2xl lg:text-3xl">
            Introduction
          </h2>
          <p className="text-sm">
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
