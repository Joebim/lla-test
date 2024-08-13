import Image from "next/image";
import { useEffect, useState } from "react";

interface QuestLevelTimerProperties {
  initialTime: number; // Time in seconds
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const QuestLevelTimer: React.FC<QuestLevelTimerProperties> = ({
  initialTime,
}) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((previousTime) => (previousTime > 0 ? previousTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerColor = time <= 60 ? "#FF0000" : "#B22F00";
  const borderColor = time <= 60 ? "#FE6A19" : "#B22F00";

  return (
    <div
      className="transition-colors flex aspect-[220/77] h-auto w-full max-w-[220px] items-center justify-center rounded-[50.36px_23.42px_23.42px_50.36px] border-[5.86px] bg-[#FEAC80] p-2 duration-300"
      style={{ borderColor: borderColor }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-[40px_15px_15px_40px] p-2">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-10 w-10 flex-shrink-0">
            <Image
              src="/images/quest-level-timer-image/noto-v1_timer-clock.png"
              alt="Timer Clock"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
          <div
            className="transition-colors flex-shrink-0 duration-300"
            style={{
              fontFamily: "Lilita One, cursive",
              fontSize: "clamp(22px, 4.5vw, 34px)",
              fontWeight: 700,
              lineHeight: "1",
              letterSpacing: "0.02em",
              color: timerColor,
            }}
          >
            {formatTime(time)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestLevelTimer;
