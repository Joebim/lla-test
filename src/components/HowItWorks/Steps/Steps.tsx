"use client";

import Image from "next/image";
import { useState } from "react";

type TabKey = "profile" | "difficulty" | "quest" | "learning";

interface TabContent {
  number: string;
  description: JSX.Element;
  illustration: string;
}

const tabs: { id: TabKey; label: string }[] = [
  { id: "profile", label: "Profile Setup" },
  { id: "difficulty", label: "Difficulty Selection" },
  { id: "quest", label: "Quest Selection" },
  { id: "learning", label: "Learning Begins" },
];

const tabContent: Record<TabKey, TabContent> = {
  profile: {
    number: "01.",
    description: (
      <>
        <span className="text-transparent-white-65">
          Begin Your Learning Journey By{" "}
        </span>
        <span className="text-white">Setting Up Your Profile</span>
        <span className="text-transparent-white-65"> And </span>
        <span className="text-white">Picking Languages </span>
        <span className="text-transparent-white-65">You Are Interested In</span>
      </>
    ),
    illustration: "/steptabs/profiletab.png",
  },
  difficulty: {
    number: "02.",
    description: (
      <>
        <span className="text-transparent-white-65">Before You Play, </span>
        <span className="text-white">Set Your Difficulty Level </span>
        <span className="text-transparent-white-65">So You Get </span>
        <span className="text-white">The Best Experience </span>
        <span className="text-transparent-white-65">For You</span>
      </>
    ),
    illustration: "/steptabs/difficultytab.png",
  },
  quest: {
    number: "03.",
    description: (
      <>
        <span className="text-transparent-white-65">
          Now, You’re Ready To Explore.{" "}
        </span>
        <span className="text-white">Select A Quest</span>
        <span className="text-transparent-white-65"> And </span>
        <span className="text-white">Preview It </span>
        <span className="text-transparent-white-65">To Get A Better Idea.</span>
      </>
    ),
    illustration: "/steptabs/questtab.png",
  },
  learning: {
    number: "04.",
    description: (
      <>
        <span className="text-transparent-white-65">Your Game Awaits. </span>
        <span className="text-white">Read The Game Tips </span>
        <span className="text-transparent-white-65">
          While You Wait. Remember{" "}
        </span>
        <span className="text-white">Your Timer Starts Soon.</span>
      </>
    ),
    illustration: "/steptabs/learningtab.png",
  },
};

export default function StepTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");

  return (
    <div className="my-10 w-full p-4 md:my-20">
      <div className="mx-auto mb-4 flex h-auto w-full flex-col justify-center rounded-[62px] border-neutral-40 bg-white md:mb-14 md:h-[65px] md:flex-row md:border lg:w-[977px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`lg::py-[21px] rounded-[61px] px-[60px] py-3 text-secondary-60 ${
              activeTab === tab.id
                ? "border-neutral-10 bg-neutral-30 text-secondary-120"
                : "bg-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mx-0 lg:mx-4 bg-black p-4 text-white md:mx-10 lg:p-20">
        <div className="flex flex-col md:flex-row md:items-center md:gap-[72px]">
          <div className="p-4 md:w-1/2">
            <Image
              src={tabContent[activeTab].illustration}
              alt={tabContent[activeTab].number}
              width={500}
              height={500}
            />
          </div>
          <div className="p-4 md:w-1/2">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white text-white lg:mb-9">
              {tabContent[activeTab].number}
            </div>
            <p className="mb-4 text-2xl leading-[35px] lg:leading-[60px] lg:text-[40px]">
              {tabContent[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
