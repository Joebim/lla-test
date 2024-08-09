import Image from "next/image";

interface heroProperties {
  title: string;
  date: string;
  genre: string;
  readDuration: number;
  imageSrc: string;
}

const FirstHero = ({
  title,
  date,
  readDuration,
  imageSrc,
  genre,
}: heroProperties) => {
  return (
    <header className="flex w-full flex-col items-center gap-[10px] bg-secondary-120 p-[12px] lg:p-[40px]">
      <div className="flex w-full flex-col gap-[48px] border-transparent-white-15 bg-white p-[12px] md:pb-[48px] lg:gap-[64px] lg:border-[8px] lg:border-solid">
        <div className="px-[13%] text-left">
          <h1 className="text-2xl font-bold tracking-[0.06em]">{title}</h1>
          <div className="mt-[12px] flex flex-col items-center gap-4 lg:flex-row">
            {genre && <h6 className="text-sm">{genre}</h6>}
            <div className="h-2 w-2 rounded-full bg-primary-100"></div>
            <h6 className="text-sm">{date}</h6>
            <div className="h-2 w-2 rounded-full bg-primary-100"></div>
            <h6 className="text-sm">{readDuration} min read</h6>
          </div>
        </div>
        <div className="mt-6 flex w-full justify-center px-[13%]">
          <div className="w-full">
            <Image
              src={imageSrc}
              layout="responsive"
              width={1000}
              height={800}
              alt="Articles Hero Image"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FirstHero;
