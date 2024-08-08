import Image from "next/image";

interface QuestMetricsProperties {
  attempts: number;
  totalTime: string;
  averageTime: string;
}

const categories: {
  id: number;
  imageURL: string;
  categoryName: string;
  maxWords: number;
  learntWords: number;
}[] = [
  {
    id: 1,
    imageURL: "/external-quest/feedback/jungle-survival.jpg",
    categoryName: "Jungle Suvival",
    maxWords: 24,
    learntWords: 5,
  },
];

const Progress = () => {
  return (
    <div className="flex w-full flex-col gap-[13px] rounded-[18px] bg-neutral-10 py-2">
      {categories.map(
        (category: {
          id: number;
          imageURL: string;
          categoryName: string;
          maxWords: number;
          learntWords: number;
        }) => (
          <div key={category.id} className="flex w-full flex-col gap-[13px]">
            <div>
              <Image
                alt={category.categoryName}
                src={category.imageURL}
                width={764}
                height={560}
                className="w-full object-cover"
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
                  <span className="text-[#888888]">{category.maxWords}</span>{" "}
                  Words Learnt
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default Progress;
