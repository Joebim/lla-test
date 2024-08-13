"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="px-6 md:px-10">
        <div className="pb-10 pt-4 sm:flex lg:pb-16 lg:pt-10">
          <Link
            className="flex gap-1 text-sm max-sm:pb-2"
            href="/external-quest"
          >
            <ArrowLeft className="pt-0.5" size={18} />
            Back
          </Link>
          <h1 className="mx-auto text-center font-axiformaBold text-3xl md:text-4xl lg:text-5xl">
            The Burning Building
          </h1>
        </div>
        <DisplayQuest
          imgs={questImages}
          imgIndex={imgIndex}
          questNo={questImages.length}
          setImgIndex={setImgIndex}
        />
        <div className="transition-all hidden flex-wrap gap-2 pt-6 *:object-cover sm:flex lg:gap-4">
          {questImages.map((image, index) => (
            <Image
              width={120}
              height={120}
              key={index}
              src={image}
              alt={`image ${index}`}
              className={index === imgIndex ? "border-2 border-primary-90" : ""}
              onClick={() => setImgIndex(index)}
            />
          ))}
        </div>
        <ReadyToStart />
      </div>
    </>
  );
};

export default ExploreQuests;
