"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

import LevelDisplay from "~/components/level-display/LevelDisplay";
import QuestLevelTimer from "~/components/quest-level-timer/QuestLevelTimer";
import ExampleComponent from "~/components/thoughts/PlayerThought";
import Scene from "./_component/scene";
import { Canvas } from "@react-three/fiber";
import { Mic } from "lucide-react";
import useSpeechToText from "~/hooks/useSpeechToText";

const Avatars = dynamic(() => import("~/components/Avatars"), {
  ssr: false,
});

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentChat, setCurrentChat] = useState<string>('')
  const { isRecording, startTranscription, stopTranscription } = useSpeechToText({ setCurrentChat })
  
  const toggleRecording = (event: React.FormEvent) => {
    if (isRecording) {
      stopTranscription(event)
    } else {
      startTranscription()
    }
  };
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
          <div onClick={toggleRecording} className={`absolute ${isRecording ? 'bg-neutral-50' : 'border border-neutral-50'} z-[5] hover:bg-secondary-50 cursor-pointer mb-3 rounded-full p-6 bottom-0 left-1/2`}>
          <Mic size={30} aria-label="mic icon" className="text-white" />
          </div>
          <Suspense>
          <Canvas >

          <Scene />
          
          </Canvas>

          </Suspense>
        </div>

    </div>
  );
};

export default Home;
