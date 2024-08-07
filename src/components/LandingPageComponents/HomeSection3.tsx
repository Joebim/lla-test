import Image from "next/image";

import { Carousel } from "~/components/carousel";

const HomeSection3 = () => {
  const slides = [
    {
      text: "Can you escape the creepy man...in German?",
      backgroundColor: "bg-secondary-120",
      imageUrl: "/images/landing/Image (1).png",
      mobileImageUrl: "/images/landing/Image (6).png",
    },
    {
      text: "Can you rescue a baby...in Vietnamese?",
      backgroundColor: "bg-white",
      imageUrl: "/images/landing/Image (2).png",
      mobileImageUrl: "/images/landing/Image (7).png",
    },
    {
      text: "Can you find your missing sibling...in Spanish?",
      backgroundColor: "bg-secondary-120",
      imageUrl: "/images/landing/Image (3).png",
      mobileImageUrl: "/images/landing/Image (8).png",
    },
    {
      text: "Can you catch the train...in French?",
      backgroundColor: "bg-white",
      imageUrl: "/images/landing/Image (4).png",
      mobileImageUrl: "/images/landing/Image (9).png",
    },
    {
      text: "Can you reach your rescue team...in English?",
      backgroundColor: "bg-secondary-120",
      imageUrl: "/images/landing/Image (5).png",
      mobileImageUrl: "/images/landing/Image (10).png",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 bg-white p-5 pt-14 md:p-10">
      <h4 className="py-3 font-axiformaMedium text-[16px] font-medium leading-[30px] text-primary-110 md:text-2xl">
        Step Into Language Quests
      </h4>
      <Carousel interval={5000} className="w-full">
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className={`flex flex-col items-center justify-center ${slide.backgroundColor} w-full gap-3 border-[4px] border-secondary-20 p-5 pt-5 md:p-10`}
            >
              <h3
                className={`w-full text-center font-axiformaSemiBold text-[16px] font-semibold leading-tight tracking-[1.28px] md:text-[32px] md:leading-[48px] ${slide.backgroundColor === "bg-secondary-120" ? "text-white" : "text-secondary-120"}`}
              >
                {slide.text.split("...in ")[0]}...in{" "}
                <span className="text-primary-120">
                  {slide.text.split("...in ")[1]}
                </span>
              </h3>
              <div className="w-full">
                <Image
                  src={slide.imageUrl}
                  alt={`Slide ${index + 1}`}
                  width={1000}
                  height={1000}
                  className="hidden h-auto w-full md:block"
                />
                <Image
                  src={slide.mobileImageUrl}
                  alt={`Slide ${index + 1} (Mobile)`}
                  width={500}
                  height={500}
                  className="h-auto w-full md:hidden"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSection3;
