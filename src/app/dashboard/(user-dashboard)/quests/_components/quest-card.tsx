import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "~/components/common/common-button";

type Quest = {
  name: string;
  words: number;
  img: StaticImageData;
  status: string;
};

type QuestCardProperties = {
  quest: Quest;
};

export default function QuestCard({ quest }: QuestCardProperties) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className=""
    >
      <div className="group flex h-[300px] w-full cursor-pointer flex-col gap-[20px] sm:h-[510px]">
        <div className="flex-[6] overflow-hidden rounded-[25px] border-solid duration-100 group-hover:border-[3px] group-hover:border-primary-60 group-hover:shadow-primary">
          <Image
            src={quest.img}
            alt={quest.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="border-stroke flex flex-[1] flex-row items-center justify-between rounded-[20px] border border-solid p-[14px] duration-100 group-hover:border-[3px] group-hover:border-primary-60 group-hover:shadow-primary">
          <div className="block group-hover:hidden">
            <h1 className="text-[11px] font-bold text-black sm:text-[14px]">
              {quest.name}
            </h1>
            <p className="text-[11px] text-secondary-100 sm:text-[14px]">{`${quest.words} Words`}</p>
          </div>
          <div className="">
            {
              <Button
                onClick={() => router.push("/dashboard/quests/1")}
                variant="primary"
                className="hidden w-[50px] group-hover:block group-hover:w-[120px] sm:w-[90px] sm:group-hover:w-[50px]"
              >
                View
              </Button>
            }
          </div>
        </div>
      </div>
    </motion.div>
  );
}
