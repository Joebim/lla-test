const Level = () => {
  return (
    <div className="relative flex h-1 flex-row items-start justify-start gap-2 self-stretch">
      <div className="rounded-2xs absolute bottom-[0px] left-[0px] top-[0px] !m-[0] h-full w-[55.8px] bg-secondary-40" />
      <div className="rounded-2xs absolute bottom-[0px] left-[63.8px] top-[0px] !m-[0] h-full w-[55.8px] bg-secondary-40" />
      <div className="rounded-2xs absolute bottom-[0px] right-[63.7px] top-[0px] !m-[0] h-full w-[55.8px] bg-secondary-40" />
      <div className="rounded-2xs absolute bottom-[0px] right-[-0.1px] top-[0px] !m-[0] h-full w-[55.8px] bg-secondary-40" />
    </div>
  );
};

const Card = ({ img }: { img: string }) => {
  return (
    <div className="font-body-h6-sm-regular relative flex w-full flex-row items-start justify-start gap-[13px] text-left text-base leading-[normal] tracking-[normal] text-secondary-120">
      <main
        className={`font-body-h6-sm-regular box-border flex h-[640px] max-w-full flex-1 flex-row items-end justify-start gap-[13px] overflow-hidden rounded-lg bg-cover bg-[top] bg-no-repeat p-6 text-left text-sm text-white`}
        style={{ backgroundImage: `url(/images/landing/${img})` }}
      >
        <div className="flex flex-1 flex-col items-start justify-start px-0 pb-0 pt-[3px]">
          <Level />
        </div>
        <div className="relative inline-block h-2.5 min-w-[65px] leading-[20px]">
          Level 0/4
        </div>
      </main>
      <div className="border-strokes box-border hidden w-[374px] max-w-full flex-row items-center justify-between gap-5 overflow-hidden rounded-lg border-[1px] border-solid bg-white px-4 py-[26px]">
        <div className="flex w-[185px] flex-col items-start justify-start gap-4">
          <b className="relative inline-block h-3 self-stretch leading-[24px]">
            Catch the Flight
          </b>
          <div className="relative inline-block h-2.5 self-stretch text-sm leading-[20px] text-secondary-100">
            31 Words
          </div>
        </div>
        <div className="relative hidden w-[55px] text-right text-sm leading-[20px] text-secondary-90">
          4 Levels
        </div>
        <div className="box-border flex h-12 w-12 flex-row items-center justify-center rounded-full border-b-[1px] border-solid border-primary-120 bg-primary-100 px-3.5 py-2.5" />
      </div>
    </div>
  );
};

export default Card;
