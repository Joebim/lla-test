"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface QuestCardProperties {
  title: string;
  words: number;
  imageUrl: string;
}

const QuestCard: FC<QuestCardProperties> = ({ title, words, imageUrl }) => {
  const router = useRouter();

  return (
    <div
      className="shadow-md overflow-hidden rounded-lg bg-white"
      data-testid="quest-card"
    >
      <Image
        src={imageUrl}
        alt={`${title} thumbnail`}
        width={400}
        height={600}
        className="w-full object-cover hover:cursor-pointer"
        onClick={() => router.push("/explore-quests")}
      />
      <div className="py-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{words} Words</p>
      </div>
    </div>
  );
};

export default QuestCard;
