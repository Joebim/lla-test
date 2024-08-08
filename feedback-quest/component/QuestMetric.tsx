interface QuestMetricsProperties {
  attempts: number;
  levelsCompleted: number;
  totalLevels: number;
  accuracy: string;
  timeSpent: string;
  averageTime: string;
}

const QuestMetrics: React.FC<QuestMetricsProperties> = ({
  attempts,
  levelsCompleted,
  totalLevels,
  accuracy,
  timeSpent,
  averageTime,
}) => {
  return (
    <div className="my-6 grid grid-cols-3 gap-4">
      <div className="shadow-md rounded-md border border-gray-200 bg-white p-4">
        <h3 className="text-lg font-bold">Quest Attempt</h3>
        <ul className="mt-2 list-none">
          <li>Attempts: {attempts} Times</li>
          <li>
            Levels Completed:{" "}
            <span className="inline-block w-8 border-b-2 border-dashed border-orange-500"></span>{" "}
            {levelsCompleted}/{totalLevels}
          </li>
          <li>Accuracy: {accuracy}</li>
        </ul>
      </div>
      <div className="shadow-md rounded-md border border-gray-200 bg-white p-4">
        <h3 className="text-lg font-bold">Time Spent on Quest</h3>
        <ul className="mt-2 list-none">
          <li>Time Spent: {timeSpent}</li>
          <li>Avg Time: {averageTime}</li>
        </ul>
      </div>
      <div className="shadow-md rounded-md border border-gray-200 bg-white p-4">
        <h3 className="text-lg font-bold">Achievement and Rewards</h3>
        <div className="mt-2 flex space-x-2">
          <img
            src="/external-quest/feedback/normalbadge.svg"
            alt="Champion Badge"
            className="h-12 w-12"
          />
          <img
            src="/external-quest/feedback/rankbadge.svg"
            alt="Streak Badge"
            className="h-12 w-12"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestMetrics;
