"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import gamepad from "../../../../../../../public/dashboard/gamepad.svg";
import questImg1 from "../../../../../../../public/dashboard/quest-img-1.png";
import questImg2 from "../../../../../../../public/dashboard/quest-img-2.png";
import questImg3 from "../../../../../../../public/dashboard/quest-img-3.png";
import questImg4 from "../../../../../../../public/dashboard/quest-img-4.png";
import questImg5 from "../../../../../../../public/dashboard/quest-img-5.png";
import questImg6 from "../../../../../../../public/dashboard/quest-img-6.png";
import QuestCard from "./quest-card";

type tabProperties = {
  tab: number;
};

const quests = [
  { name: "Jungle Survival", words: 24, img: questImg1, status: "completed" },
  {
    name: "Save the Cyclist",
    words: 18,
    img: questImg2,
    status: "in progress",
  },
  {
    name: "The Burning Building",
    words: 22,
    img: questImg3,
    status: "completed",
  },
  {
    name: "Catch the Flight",
    words: 32,
    img: questImg4,
    status: "in progress",
  },
  { name: "Buy a book", words: 21, img: questImg5, status: "completed" },
  { name: "Customer Service", words: 31, img: questImg6, status: "completed" },
];

export const QuestTabBody: React.FC<tabProperties> = ({ tab }) => {
  const [show, setShow] = useState(false);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const filterQuests = (tab: number) => {
    if (tab === 1) return quests;
    if (tab === 2)
      return quests.filter((quest) => quest.status === "in progress");
    if (tab === 3)
      return quests.filter((quest) => quest.status === "completed");
    return quests;
  };

  const filteredQuests = filterQuests(tab);

  return (
    <div className="flex min-h-[400px] w-full flex-row items-center justify-center rounded-[20px] bg-white p-[0px] sm:p-[30px]">
      {show ? (
        <div className="grid w-full grid-cols-4 flex-wrap gap-[20px] max-[1127px]:grid-cols-3 max-[972px]:grid-cols-2 max-[640px]:grid-cols-2">
          <AnimatePresence>
            {filteredQuests.map((quest) => (
              // eslint-disable-next-line react/jsx-key
              <QuestCard quest={quest} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div
          className="flex cursor-pointer flex-col items-center gap-[10px] px-[30px]"
          onClick={() => setShow(true)}
        >
          <Image src={gamepad} height={40} width={80} alt="Gamepad" />
          <p className="text-center text-[15px] text-transparent-black-35 sm:text-[20px]">
            You currently have no quest in progress.
          </p>
        </div>
      )}
    </div>
  );
};
