"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Mic } from "lucide-react";
import Image from "next/image";
import LevelDisplay from "~/components/level-display/LevelDisplay";
import QuestLevelTimer from "~/components/quest-level-timer/QuestLevelTimer";
import { PlayerThought } from "~/components/thoughts/PlayerThought";
import useSpeechToText from "~/hooks/useSpeechToText";
import Scene from "./_component/scene";

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentChat, setCurrentChat] = useState<string>('');
  const { isRecording, startTranscription, stopTranscription } = useSpeechToText({ setCurrentChat });

  const toggleRecording = (event: React.FormEvent) => {
    if (isRecording) {
      stopTranscription(event);
    } else {
      startTranscription();
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
    className="w-full h-dvh flex flex-col"
      // style={{
      //   position: "relative",
      //   width: "100%",
      //   height: "100dvh",
      //   backgroundImage: "url('/models/Level 12.png')",
      //   backgroundSize: "contain",
      //   backgroundPosition: "bottom center",
      //   backgroundRepeat: "no-repeat",
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "space-between",
      // }}
      data-testid="home-container"
    >
      <Image fill src={"/models/Level 12.png"} className="z-10" objectFit="center" alt="scene timestamp background"/>
      <div className="flex w-full z-20 flex-col justify-between gap-2 px-[2%] pt-5 lg:flex-row" data-testid="header">
        <LevelDisplay data-testid="level-display" />
        <QuestLevelTimer initialTime={300} data-testid="quest-timer" />
      </div>

      <div className="relative h-full w-full z-30" data-testid="main-content">
        <div className="absolute bottom-0 left-0 pb-10 pl-[2%]" data-testid="example-component">
            <PlayerThought thought={currentChat} />
        </div>
        <div
          onClick={toggleRecording}
          className={`absolute ${isRecording ? 'bg-primary-100' : 'border border-primary-100'} z-[5] hover:bg-primary-100 cursor-pointer mb-3 rounded-full p-4 bottom-0 left-1/2`}
          data-testid="mic-button"
        >
          <Mic size={30} aria-label="mic icon" className="text-white" />
        </div>
        <Suspense>
          <Canvas data-testid="scene-canvas">
            <Scene />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
