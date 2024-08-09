import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import SceneCard from "~/components/SceneCard";

const DisplayQuest = ({
  imgs,
  questNo,
  imgIndex,
  setImgIndex,
}: {
  questNo: number;
  imgIndex: number;
  imgs: StaticImageData[];
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  const [currentImage, setCurrentImage] = useState(imgs[imgIndex]);

  useEffect(() => {
    setCurrentImage(imgs[imgIndex]);
  }, [imgIndex, imgs]);

  return (
    <div
      style={{
        background: `url(${currentImage.src}) no-repeat center/cover`,
      }}
      className="grid items-end transition-all max-md:justify-center max-md:py-20 md:min-h-[768px] md:px-10 md:pb-10 lg:grid-cols-2"
    >
      <SceneCard
        description="Lora lives in California and needs to get on the plane to Paris where she meets her boss for Fashion Week. Problem is, she just might miss that flight and get fired. How fast can you help her get to the airport?"
        levels={8}
      />
      <div className="ms-auto hidden gap-4 *:rounded-full *:border *:border-transparent-white-10 *:bg-transparent-black-75 *:p-2 *:text-white lg:flex">
        <ChevronLeft
          size={38}
          onClick={() =>
            setImgIndex((previousIndex) =>
              previousIndex === 0 ? questNo - 1 : previousIndex - 1,
            )
          }
        />
        <ChevronRight
          size={38}
          onClick={() =>
            setImgIndex((previousIndex) =>
              previousIndex === questNo - 1 ? 0 : previousIndex + 1,
            )
          }
        />
      </div>
    </div>
  );
};

export default DisplayQuest;
