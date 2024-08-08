import Progress from "./component/Progress";
import QuestMetrics from "./component/QuestMetric";
import WordsLearnt from "./component/WordsLearnt";

const questData = {
  title: "Jungle Survival",
  imageUrl: "/path/to/jungle-survival.jpg",
  progress: 70,
  metrics: {
    attempts: 5,
    levelsCompleted: 3,
    totalLevels: 4,
    accuracy: "70%",
    timeSpent: "15 Mins",
    averageTime: "3 Mins",
  },
  achievements: [
    {
      title: "Champion",
      imageUrl: "/external-quest/feedback/normalbadge.svg",
    },
    { title: "Streak", imageUrl: "/external-quest/feedback/rankbadge.svg" },
  ],
  words: [
    { word: "enter", translation: "entrer", correct: true },
    { word: "rescue", translation: "secourir", correct: true },
    { word: "leave", translation: "en arrière", correct: true },
    { word: "climb", translation: "monter", correct: true },
    { word: "run", translation: "ouvrir", correct: true },
    { word: "open", translation: "partir", correct: false },
    { word: "carry", translation: "porter", correct: false },
    { word: "return", translation: "en arrière", correct: false },
    { word: "return", translation: "en arrière", correct: false },
    // Add more words as needed
  ],
};

const FeebaackQuest = () => {
  const { metrics, words } = questData;

  return (
    <main className="container mx-auto bg-[#f9fafa] px-24 py-8">
      <Progress />
      <QuestMetrics
        attempts={metrics.attempts}
        levelsCompleted={metrics.levelsCompleted}
        totalLevels={metrics.totalLevels}
        accuracy={metrics.accuracy}
        timeSpent={metrics.timeSpent}
        averageTime={metrics.averageTime}
      />
      <WordsLearnt words={words} />
    </main>
  );
};

export default FeebaackQuest;
