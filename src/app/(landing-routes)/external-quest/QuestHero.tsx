import { quests } from "./data";
import QuestCard from "./QuestCard";

const QuestHero = () => {
  return (
    <section
      data-testid="quest-hero-section"
      className="mt-12 w-full bg-secondary-100 p-4 sm:p-6 md:p-10"
      style={{ fontFamily: "Axiforma" }}
    >
      <div className="w-full bg-white px-4 py-16 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 lg:py-16">
        <h2
          data-testid="quest-hero-heading"
          className="text-secondary-200 mb-8 hidden pt-12 text-center text-3xl font-bold md:block md:text-4xl lg:text-5xl"
        >
          Explore Language Quests
        </h2>
        <h2
          data-testid="quest-hero-heading"
          className="text-secondary-200 mb-8 block pt-12 text-center text-3xl font-bold md:hidden md:text-4xl lg:text-5xl"
        >
          Explore Quests
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {quests.map((quest) => (
            <QuestCard
              key={quest.id}
              title={quest.title}
              words={quest.words}
              imageUrl={quest.imageUrl}
              data-testid="quest-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestHero;
