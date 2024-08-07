import QuestTab from "./_components/quest-tab";
import WelcomeBackBar from "./_components/welcome-back-bar";

const QuestsPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-8 bg-neutral-5 px-[20px] pb-[74px] pt-[50px] font-axiforma sm:px-[74px]">
        <WelcomeBackBar />
        <QuestTab />
      </div>
    </>
  );
};

export default QuestsPage;
