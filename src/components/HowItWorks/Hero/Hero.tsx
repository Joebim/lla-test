import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full border-secondary-120 bg-white px-4 lg:px-20">
      <h1 className="my-8 text-center text-[32px] font-bold leading-[12px] text-secondary-120 lg:my-16 lg:text-[64px] lg:leading-[70px]">
        How It Works
      </h1>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex-1">
          <Image
            src="/howitworks/hero-1.png"
            alt="Image 1"
            width={500}
            height={500}
            className="h-auto w-full"
          />
        </div>
        <div className="flex-1">
          <Image
            src="/howitworks/hero-2.png"
            alt="Image 2"
            className="h-auto w-full"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1">
          <Image
            src="/howitworks/hero-3.png"
            alt="Image 3"
            className="h-auto w-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
