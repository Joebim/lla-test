import LightNav from "~/components/light-navbar/LightNav";

const FirstHero = () => {
  return (
    <header className="flex w-full gap-[10px] bg-secondary-120 p-[12px] lg:p-[40px]">
      <div className="flex w-full flex-col gap-[48px] border-transparent-white-15 bg-white py-[12px] md:pb-[48px] lg:gap-[64px] lg:border-[8px] lg:border-solid">
        <LightNav className="relative mx-auto w-full max-w-[1654px] bg-white" />
        <div className="">
          <h1 className="text-center font-axiformaSemiBold text-[32px] font-bold leading-[48px] tracking-[0.06em] lg:text-[64px] lg:leading-[96px]">
            Article Hero
          </h1>
        </div>
      </div>
    </header>
  );
};
export default FirstHero;
