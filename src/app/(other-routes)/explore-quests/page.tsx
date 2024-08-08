"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { questImages } from "./constants";
import DisplayQuest from "./DisplayQuest";
import ReadyToStart from "./ReadyToStart";

const ExploreQuests = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((previousIndex) =>
        previousIndex === questImages.length - 1 ? 0 : previousIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="grid gap-y-8 pt-8 md:pt-16">
        <h1 className="text-center font-axiformaBold text-3xl max-md:pb-8 md:text-4xl lg:text-5xl">
          Explore Language Quests
        </h1>
        <div className="hidden items-center justify-center gap-6 sm:justify-between md:flex md:px-6 md:py-10 lg:px-10">
          <h3 className="font-axiformaSemiBold text-xl lg:text-2xl">
            The Burning Building
          </h3>
          <div className="flex gap-2 transition-all *:object-cover lg:gap-4">
            {questImages.map((image, index) => (
              <Image
                width={120}
                height={120}
                key={index}
                src={image}
                alt={`image ${index}`}
                className={
                  index === imgIndex ? "border-2 border-primary-90" : ""
                }
                onClick={() => setImgIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="md:px-6 md:py-10 lg:px-10">
        <DisplayQuest
          imgs={questImages}
          imgIndex={imgIndex}
          questNo={questImages.length}
          setImgIndex={setImgIndex}
        />
        <ReadyToStart />
      </div>
    </>
  );
};

export default ExploreQuests;
