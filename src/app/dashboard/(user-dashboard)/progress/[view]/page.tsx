import Image from "next/image";

//This is a method that creates an appropriate string from a score provided to it
const createScoreString = (score: number) => {
  //The method checks if the score is zero and returns - if so otherwise, it returs the score with %
  //example score = 8 returns 8%, score = 0 returns -
  const scoreString = score === 0 ? "-" : score + "%";
  return scoreString;
};

const View = ({ params }: { params: { view: string } }) => {
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
          imageURL: "/progress-images/champion.png",
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

  //These colors are used to showcase the newly learnt words
  const wordsColor = "#A0A0A0";
  const newWordsColor = "#1B1B1B";

  const id = Number.parseInt(params.view);
  const category = categories[id];

  return (
    <div className="w-full">
      {/* This is the container to the progress page and this is where the user progress is displayed */}
      <div className="flex w-full items-center justify-center bg-[#F9FAFA] px-[80px] py-[65px]">
        <div className="flex w-full flex-col gap-[48px]">
          {/* This is the container to the progress summary */}
          <div className="flex flex-col gap-[24px]">
            <div key={category.id} className="flex flex-col gap-[48px]">
              <div className="w-full">
                <Image
                  alt={category.categoryName}
                  src={category.imageURL}
                  width={764}
                  height={560}
                  className="h-[455px] w-full object-cover"
                  layout="responsive"
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
                <div className="font-axiforma text-[20px] font-medium">
                  {category.learntWords}/
                  <span className="text-[#888888]">{category.maxWords}</span>{" "}
                  Words Learnt
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-[24px] md:flex-row">
              <div className="flex w-full flex-col gap-[28px] rounded-[16px] border-[1px] border-neutral-60 bg-neutral-20 p-[24px] md:w-1/3">
                <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                  Quest Attempts
                </div>
                <div className="flex flex-col gap-[32px]">
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                    <div className="font-axiforma text-[14px]">
                      <span className="text-[#717171]">Atempts: </span>
                      {`${category.attempts} Times`}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                    <div className="font-axiforma text-[14px]">
                      <span className="text-[#717171]">Levels Completed: </span>{" "}
                      {`${category.completedLevels}/${category.maxLevels}`}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                    <div className="font-axiforma text-[14px]">
                      <span className="text-[#717171]">Accuracy: </span>{" "}
                      {createScoreString(category.accuracy)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-[28px] rounded-[16px] border-[1px] border-neutral-60 bg-neutral-20 p-[24px] md:w-1/3">
                <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                  Time Spent On Quest
                </div>

                <div className="flex flex-col gap-[32px]">
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                    <div className="font-axiforma text-[14px]">
                      <span className="text-[#717171]">Time Spent: </span>
                      {`${category.timeSpent} Min`}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                    <div className="font-axiforma text-[14px]">
                      <span className="text-[#717171]">Avg Time: </span>{" "}
                      {`${category.avgTimeSpent} Min`}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-[28px] rounded-[16px] border-[1px] border-neutral-60 bg-neutral-20 p-[24px] md:w-1/3">
                <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                  Achivements and Rewards
                </div>
                <div className="flex flex-col gap-[24px]">
                  <div className="flex flex-row gap-[32px]">
                    {category.rewards.map((reward, index: number) => (
                      <Image
                        key={index}
                        alt={reward.name}
                        src={reward.imageURL}
                        width={130}
                        height={130}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] rounded-[12px] border-[1px] border-[#C7D3E1] px-[48px] py-[24px]">
              <div className="h-[48px] border-b-[1px] border-b-[#C7D3E1] font-axiforma text-[18px] font-bold md:h-[53px] md:text-[24px]">
                New Words Learnt
              </div>
              <div className="flex w-full flex-col gap-[48px] rounded-[10px] bg-transparent-white-35 px-[32px] py-[24px]">
                {category.words.map((word, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-[16px] md:flex-row md:justify-between"
                  >
                    <div
                      className={`w-[40px] text-center md:text-left text-[${category.newWords.includes(word.local) ? newWordsColor : wordsColor}]`}
                    >
                      {word.local}
                    </div>
                    <div className="h-[3px] w-[200px] bg-transparent-black-50"></div>
                    <div
                      className={`w-[80px] text-center md:text-left text-[${category.newWords.includes(word.local) ? newWordsColor : wordsColor}]`}
                    >
                      {word.interpretation}
                    </div>
                    <div>
                      {category.newWords.includes(word.local) ? (
                        <Image
                          alt="pass"
                          src="/progress-images/check.png"
                          width={25}
                          height={25}
                        />
                      ) : (
                        <Image
                          alt="pass"
                          src="/progress-images/blur-check.png"
                          width={25}
                          height={25}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
