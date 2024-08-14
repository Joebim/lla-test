import Image from "next/image";

import LevelCompletionIndicator from "./LevelCompletionIndicator";

interface LevelDisplayProperties {
  completedLevels?: number;
}

const LevelDisplay: React.FC<LevelDisplayProperties> = ({
  completedLevels = 0,
}) => {
  const questImage = "/level-images/Bedroom scene 2.png";

  return (
    <div className="flex w-full max-w-[350px] items-center rounded-[3rem_1rem_1rem_3rem] border-[0.5rem] border-[#FE6A19] bg-[#FEAC80] p-2 sm:p-5">
      <div className="flex w-full items-center gap-2 sm:gap-4">
        {/* Left div */}
        <div className="aspect-square w-[20%] max-w-[70px] flex-shrink-0">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={questImage}
              alt="Burning Building quest"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Right div */}
        <div className="flex flex-grow flex-col justify-center gap-1 overflow-hidden">
          <div className="text-left font-[lilita-one] text-lg font-normal leading-tight tracking-[0.02em] text-[#CB2600] sm:text-xl">
            The Burning Building
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-[lilita-one]text-xs whitespace-nowrap text-left font-normal leading-tight text-[#2A212A99] sm:text-sm">
              Levels Completed:
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <LevelCompletionIndicator
                  key={index}
                  isCompleted={index < completedLevels}
                />
              ))}
            </div>
          </div>
          <div className="text-left font-[lilita-one] text-xs font-normal leading-tight text-[#2A212A99] sm:text-sm">
            {completedLevels}/4 Words Learnt
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelDisplay;
