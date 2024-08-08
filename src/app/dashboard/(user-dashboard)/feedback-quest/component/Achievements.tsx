interface AchievementsProps {
  achievements: { title: string, imageUrl: string }[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <div className="achievements mt-4">
      <h2 className="text-2xl font-bold">Achievements and Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement p-4 bg-white shadow rounded flex flex-col items-center">
            <img src={achievement.imageUrl} alt={achievement.title} className="w-12 h-12 mb-2" />
            <p>{achievement.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
