"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    imgSrc: "/images/landing/Illustration Container.png",
    title: "Converse with Characters",
    description:
      "Practice speaking with others in real-life situations, perfect your pronunciation, and boost your confidence. Each conversation is crafted to make language learning a breeze.",
  },
  {
    imgSrc: "/images/landing/Illustration Container (1).png",
    title: "Learn Multiple Languages",
    description:
      "Ready to master more than one language? We make it simple and fun to learn multiple languages at once. Switch between languages with ease, track your progress, and stay engaged.",
  },
  {
    imgSrc: "/images/landing/Frame 1686561247.png",
    title: "Explore Different Quests",
    description:
      "Ready to master more than one language? We make it simple and fun to learn multiple languages at once. Switch between languages with ease, track your progress, and stay engaged.",
  },
  {
    imgSrc: "/images/landing/stopwatch-svgrepo-com 1.png",
    title: "Beat the Clock",
    description:
      "Put your skills to the test and race against time! Complete challenges quickly to advance and earn extra points for finishing fast. It’s all about staying sharp and quick.",
  },
];

const HomeKeyFeaturesSection = () => {
  const sectionReferences = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    for (const [index, section] of sectionReferences.current.entries()) {
      if (!section) continue;

      gsap.fromTo(
        section,
        {
          scale: 0.9,
          opacity: 0.5,
        },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
            onEnter: () => {
              gsap.to(section, { scale: 1, opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
              gsap.to(section, { scale: 0.9, opacity: 0.7, duration: 0.5 });
            },
            onLeave: () => {
              gsap.to(section, { scale: 0.9, opacity: 0.7, duration: 0.5 });
            },
          },
        },
      );
    }
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 bg-white p-5 pt-14 md:p-10">
      <h4 className="py-3 font-axiformaMedium text-[16px] font-medium leading-[30px] text-primary-110 md:text-2xl">
        Discover Our Key Features
      </h4>
      <div className="grid w-full grid-cols-1 place-content-center place-items-center items-center justify-center gap-3 gap-y-10 place-self-center border-[4px] border-secondary-20 bg-secondary-120 p-5 pt-5 md:grid-cols-2 md:p-10">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(element) => {
              sectionReferences.current[index] = element;
            }}
            className="flex h-[400px] w-[100%] flex-col items-center justify-center border-[6px] border-[#FFFFFFCC] sm:h-[500px] md:w-full"
          >
            <div className="flex h-full w-full flex-col items-center justify-center border-[8px] border-secondary-90">
              <div className="relative flex h-full w-full flex-col items-center justify-center border-[6px] border-secondary-70">
                <Image
                  src={"/images/landing/Shapes.png"}
                  alt="shape1"
                  width={270}
                  height={270}
                  className="absolute left-0 top-0 z-0 hidden sm:hidden md:hidden lg:block"
                />
                <Image
                  src={"/images/landing/Shapes (1).png"}
                  alt="shape2"
                  width={270}
                  height={270}
                  className="absolute right-0 top-0 hidden sm:hidden md:hidden lg:block"
                />
                <Image
                  src={"/images/landing/Shapes (2).png"}
                  alt="shape3"
                  width={270}
                  height={270}
                  className="absolute bottom-0 left-0 hidden sm:hidden md:hidden lg:block"
                />
                <Image
                  src={"/images/landing/Shapes (3).png"}
                  alt="shape4"
                  width={270}
                  height={270}
                  className="absolute bottom-0 right-0 hidden sm:hidden md:hidden lg:block"
                />
                <Image
                  src={"/images/landing/Shapes (4).png"}
                  alt="shape1"
                  width={400}
                  height={400}
                  className="absolute left-0 top-0 w-full sm:w-full lg:hidden"
                />
                <div className="z-20 flex w-full flex-col items-center justify-center space-y-2 p-3">
                  <Image
                    src={feature.imgSrc}
                    alt="feature image"
                    width={index === 2 ? 160 : 100}
                    height={index === 2 ? 150 : 90}
                    className={`w-[60px] md:w-[100px] ${index == 2 ? "w-[100px] md:w-[200px]" : ""}`}
                  />
                  <h1 className="text-center font-axiformaBold text-[20px] font-bold leading-[30px] tracking-[1.25px] text-white md:text-[24px] xl:leading-[56px]">
                    {feature.title}
                  </h1>
                  <p className="w-[90%] text-center text-[14px] text-secondary-60 md:text-[16px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeKeyFeaturesSection;
