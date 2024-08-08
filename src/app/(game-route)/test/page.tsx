"use client";

import { Mic } from "lucide-react";
import { useEffect, useState } from "react";

import LevelDisplay from "~/components/level-display/LevelDisplay";
import QuestLevelTimer from "~/components/quest-level-timer/QuestLevelTimer";
import ExampleComponent from "~/components/thoughts/PlayerThought";
import My3DModel from "./_components/main";

const Page = () => {
  const setMounted = useState(false)[1];

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [setMounted]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url('/models/Level 12.png')",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="flex w-full flex-col justify-between gap-2 px-[2%] pt-5 lg:flex-row">
        <LevelDisplay />
        <QuestLevelTimer initialTime={300} />
      </div>

      <div style={{ flex: 1, position: "relative" }}>
        <div className="absolute bottom-[20%] left-0 pb-10 pl-[2%]">
          <ExampleComponent />
        </div>
        <div className="absolute bottom-[20%] left-1/2 mb-3 -translate-x-1/2 transform cursor-pointer rounded-full border-white bg-secondary-80 p-6 hover:bg-secondary-50">
          <Mic size={30} aria-label="mic icon" className="text-white" />
        </div>
        <div style={{ position: "relative", zIndex: 0, minHeight: "100%" }}>
          <My3DModel />
        </div>
      </div>
    </div>
  );
};

export default Page;
