import Image from "next/image";
import Link from "next/link";

import CustomButton from "~/components/common/common-button/common-button";

const createScoreString = (score: number) => {
  const scoreString = score === 0 ? "-" : score + "%";
  return scoreString;
};

const Progress = () => {
  const days: { num: number; initial: string; short: string }[] = [
    { num: 1, initial: "M", short: "Mon" },
    { num: 2, initial: "T", short: "Tue" },
    { num: 3, initial: "W", short: "Wed" },
    { num: 4, initial: "T", short: "Thu" },
    { num: 5, initial: "F", short: "Fri" },
    { num: 6, initial: "S", short: "Sat" },
    { num: 7, initial: "S", short: "Sun" },
  ];

  // The following is an array containing several objects associated with the categories in the progress page
  const categories: {
    id: number;
    imageURL: string;
    categoryName: string;
    maxWords: number;
    learntWords: number;
    maxLevels: number;
    completedLevels: number;
    accuracy: number;
    attempts: number;
    timeSpent: number;
    avgTimeSpent: number;
    rewards: { name: string; imageURL: string }[];
    // all the words that are newly learnt and those that are associated with this quest
    newWords: string[];
    words: { local: string; interpretation: string }[];
  }[] = [
    {
      id: 1,
      imageURL: "/progress-images/jungle-survival.png",
      categoryName: "Jungle Suvival",
      maxWords: 24,
      learntWords: 18,
      maxLevels: 4,
      completedLevels: 3,
      accuracy: 70,
      attempts: 5,
      timeSpent: 15,
      avgTimeSpent: 3,
      rewards: [
        {
          name: "champion",
          imageURL: "/progress-images/champion.png",
        },
        {
          name: "streak",
          imageURL: "/progress-images/streak.png",
        },
      ],
      newWords: ["rescue", "open", "carry"],
      words: [
        { local: "enter", interpretation: "entrer" },
        { local: "rescue", interpretation: "secourir" },
        { local: "leave", interpretation: "en arrière" },
        { local: "climb", interpretation: "monter" },
        { local: "run", interpretation: "ouvrir" },
        { local: "open", interpretation: "partir" },
        { local: "carry", interpretation: "porter" },
        { local: "return", interpretation: "arrière" },
      ],
    },
    {
      id: 1,
      imageURL: "/progress-images/save-the-cyclist.png",
      categoryName: "Save The Cyclist",
      maxWords: 24,
      learntWords: 12,
      maxLevels: 4,
      completedLevels: 3,
      accuracy: 70,
      attempts: 5,
      timeSpent: 15,
      avgTimeSpent: 3,
      rewards: [
        {
          name: "champion",
          imageURL: "/progress-images/champion.png",
        },
        {
          name: "streak",
          imageURL: "/progress-images/streak.png",
        },
      ],
      newWords: ["rescue", "open", "carry"],
      words: [
        { local: "enter", interpretation: "entrer" },
        { local: "rescue", interpretation: "secourir" },
        { local: "leave", interpretation: "en arrière" },
        { local: "climb", interpretation: "monter" },
        { local: "run", interpretation: "ouvrir" },
        { local: "open", interpretation: "partir" },
        { local: "carry", interpretation: "porter" },
        { local: "return", interpretation: "arrière" },
      ],
    },
    {
      id: 1,
      imageURL: "/progress-images/the-burning-building.png",
      categoryName: "The Burning Building",
      maxWords: 18,
      learntWords: 18,
      maxLevels: 4,
      completedLevels: 3,
      accuracy: 70,
      attempts: 5,
      timeSpent: 15,
      avgTimeSpent: 3,
      rewards: [
        {
          name: "champion",
          imageURL: "/progress-images/champion.png",
        },
        {
          name: "streak",
          imageURL: "/progress-images/streak.png",
        },
      ],
      newWords: ["rescue", "open", "carry"],
      words: [
        { local: "enter", interpretation: "entrer" },
        { local: "rescue", interpretation: "secourir" },
        { local: "leave", interpretation: "en arrière" },
        { local: "climb", interpretation: "monter" },
        { local: "run", interpretation: "ouvrir" },
        { local: "open", interpretation: "partir" },
        { local: "carry", interpretation: "porter" },
        { local: "return", interpretation: "arrière" },
      ],
    },
    {
      id: 1,
      imageURL: "/progress-images/catch-the-flight.png",
      categoryName: "Catch The Flight",
      maxWords: 24,
      learntWords: 10,
      maxLevels: 4,
      completedLevels: 3,
      accuracy: 70,
      attempts: 5,
      timeSpent: 15,
      avgTimeSpent: 3,
      rewards: [
        {
          name: "champion",
          imageURL: "/progress-images/Champion.png",
        },
        {
          name: "streak",
          imageURL: "/progress-images/streak.png",
        },
      ],
      newWords: ["enter", "rescue", "leave"],
      words: [
        { local: "enter", interpretation: "entrer" },
        { local: "rescue", interpretation: "secourir" },
        { local: "leave", interpretation: "en arrière" },
        { local: "climb", interpretation: "monter" },
        { local: "run", interpretation: "ouvrir" },
        { local: "open", interpretation: "partir" },
        { local: "carry", interpretation: "porter" },
        { local: "return", interpretation: "arrière" },
      ],
    },
  ];
  const activeDays = new Set(["Mon", "Wed", "Fri", "Sat"]);

  const pronunciationScore: number = 100;

  const vowelAccuracy: number = 4;

  const consonantAccuracy: number = 8;

  const risingIntonationScore: number = 10;

  const fallingIntonationScore: number = 20;

  const totalWords: number = 350;

  const basicVocubulary: number = 60;

  const intermediateVocubularyScore: number = 70;

  const advancedVocubularyScore: number = 40;

  const size = "w-[25.43px] h-[25.43px]";
  const active = "flex items-center justify-center " + size;
  const inactive = "rounded-full border-[1.59px] border-[#C7D3E1] " + size;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center bg-[#F9FAFA] px-[20px] py-[65px] sm:px-[40px] lg:px-[80px]">
        <div className="flex w-full flex-col gap-[48px]">
          <div className="flex w-full flex-col gap-[24px] p-0 xl:p-[65px]">
            <div className="font-axiforma text-[24px] font-bold">
              Game Statistics
            </div>
            <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col gap-[28px] rounded-[16px] border bg-[#FFEDCC] p-[24px]">
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    Total Streak
                  </div>
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-transparent-white-40">
                    <Image
                      alt="fire"
                      src="/progress-images/fire.png"
                      width={25}
                      height={25}
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-80">
                    0 Streak
                  </div>
                  <div className="w-full font-axiforma text-[14px] font-normal">
                    Keep your streak alive by completing at least one lesson
                    every day.
                  </div>
                  <div className="flex flex-row justify-between">
                    {days.map((day) => (
                      <div key={day.num} className="flex flex-col gap-[8px]">
                        <div className="text-center">{day.initial}</div>
                        <div
                          className={
                            activeDays.has(day.short) ? active : inactive
                          }
                        >
                          {activeDays.has(day.short) && (
                            <Image
                              alt="fire"
                              src="/progress-images/fire.png"
                              width={25}
                              height={25}
                              style={{ height: "auto" }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[28px] rounded-[16px] border border-neutral-50 bg-[#F4F6F9] p-[24px]">
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    Pronunciation Accuracy
                  </div>
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-transparent-white-40">
                    <Image
                      alt="fire"
                      src="/progress-images/fire-blue.png"
                      width={25}
                      height={25}
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    {createScoreString(pronunciationScore)}
                  </div>
                  <div className="flex flex-col gap-[48px]">
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row items-center gap-[10px]">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                        <div className="font-axiforma text-[14px]">
                          Vowel Accuracy: {createScoreString(vowelAccuracy)}
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-[10px]">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                        <div className="font-axiforma text-[14px]">
                          Consonant Accuracy:{" "}
                          {createScoreString(consonantAccuracy)}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row items-center gap-[10px]">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                        <div className="font-axiforma text-[14px]">
                          Rising Intonation:{" "}
                          {createScoreString(risingIntonationScore)}
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-[10px]">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                        <div className="font-axiforma text-[14px]">
                          Falling Intonation:{" "}
                          {createScoreString(fallingIntonationScore)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[28px] rounded-[16px] border border-[1px] border-[#DCDD8F] bg-[#FBFCDD] p-[24px]">
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    Words Learnt
                  </div>
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-transparent-white-40">
                    <Image
                      alt="fire"
                      src="/progress-images/languages.png"
                      width={25}
                      height={25}
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    Total Words Learned: {totalWords}
                  </div>
                  <div className="flex flex-col gap-[32px]">
                    <div className="flex flex-row items-center gap-[10px]">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                      <div className="font-axiforma text-[14px]">
                        Basic Vocabulary: {`${basicVocubulary} Words`}
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-[10px]">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                      <div className="font-axiforma text-[14px]">
                        Intermediate Vocabulary:{" "}
                        {`${intermediateVocubularyScore} Words`}
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-[10px]">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                      <div className="font-axiforma text-[14px]">
                        Advanced Vocabulary:{" "}
                        {`${advancedVocubularyScore} Words`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[28px]">
            <div className="font-axiforma text-[24px] font-bold">
              Words Learnt
            </div>
            <div className="grid w-full gap-[3%] md:grid-cols-2">
              {categories.map(
                (
                  category: {
                    id: number;
                    imageURL: string;
                    categoryName: string;
                    maxWords: number;
                    learntWords: number;
                  },
                  index: number,
                ) => (
                  <div key={category.id} className="flex flex-col gap-[48px]">
                    <div>
                      <Image
                        alt={category.categoryName}
                        src={category.imageURL}
                        width={764}
                        height={560}
                        className="w-full"
                        style={{ height: "auto" }}
                      />
                    </div>
                    <div className="flex flex-col gap-[24px] rounded-[18px] border-[1px] border-solid border-[#CBD5E1] bg-white px-[16px] py-[24px]">
                      <div className="font-axiforma text-[20px] font-medium text-[#414141]">
                        {category.categoryName}
                      </div>
                      <div>
                        <div className="h-[10px] w-[100%] rounded-[20px] bg-transparent-black-5">
                          <div
                            className="h-full rounded-full bg-primary-110 p-[5px]"
                            style={{
                              width: `${(category.learntWords * 100) / category.maxWords}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div className="font-axiforma text-[20px] font-medium">
                          {category.learntWords}/
                          <span className="text-[#888888]">
                            {category.maxWords}
                          </span>{" "}
                          Words Learnt
                        </div>
                        <div>
                          <Link href={`/dashboard/progress/${index}`}>
                            <CustomButton variant="primary">View</CustomButton>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
