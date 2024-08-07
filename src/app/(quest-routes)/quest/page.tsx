"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import LevelDisplay from "~/components/level-display/LevelDisplay";
import QuestLevelTimer from "~/components/quest-level-timer/QuestLevelTimer";
import ExampleComponent from "~/components/thoughts/PlayerThought";
import Scene from "./_component/scene";
import { Canvas } from "@react-three/fiber";
import { Mic } from "lucide-react";

const Avatars = dynamic(() => import("~/components/Avatars"), {
  ssr: false,
});

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
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


        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-0 pb-10 pl-[2%]">
            <ExampleComponent />
          </div>
          <div className="absolute bg-secondary-80 border-white hover:bg-secondary-50 cursor-pointer mb-3 rounded-full p-6 bottom-0 left-1/2">
          <Mic size={30} aria-label="mic icon" className="text-white" />
          </div>
          <Canvas >

          <Scene />
          {/* <SceneTwo /> */}
          </Canvas>
        </div>

    </div>
  );
};

export default Home;
