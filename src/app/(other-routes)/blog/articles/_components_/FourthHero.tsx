import Link from "next/link";
import CustomButton from "~/components/common/common-button/common-button";

const FourthHero = () => {
  return (
    <article className="bg-secondary-120 px-[20px] py-[24px] lg:p-[40px]">
      <div className="flex flex-col items-center gap-[48px] border-[8px] border-solid border-transparent-black-15 bg-white px-[12px] py-[28px] lg:flex-row lg:gap-[56px] lg:px-[80px] lg:py-[120px]">
        <div className="w-full max-w-[686px] text-center lg:text-start">
          <h2 className="font-axiformaSemiBold text-[18px] font-semibold leading-[28px] tracking-[0.04em] md:text-[40px] md:leading-[60px]">
            <span className="text-secondary-60">Ready To </span>Start Your
            Language Adventure?
          </h2>
          <Link href="/signup">
            <CustomButton
              variant="primary"
              type="button"
              className="mt-[40px] hidden w-[213px] rounded-[59px] border-b border-solid border-primary-120 bg-primary-100 px-[32px] py-2 text-[18px] leading-[28px] text-white lg:flex lg:p-8"
            >
              Get Started Now
            </CustomButton>
          </Link>
        </div>
        <div className="w-full max-w-[746px]">
          <p className="text-center text-[14px] leading-[20px] lg:text-start lg:text-[20px] lg:leading-[30px]">
            Now you&apos;ve learnt some basic Spanish phrases, it&apos;s time to
            put your language skills to the test! At Delve, we have different 3D
            Game scenarios, where you can learn and test your Spanish Speaking
            proficiency.
          </p>
          <button
            type="button"
            className="mt-[40px] block w-full rounded-[59px] border-b border-solid border-primary-120 bg-primary-100 px-[16px] py-[10px] text-[16px] leading-[24px] text-white lg:hidden"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default FourthHero;
