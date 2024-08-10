"use client";

import { useEffect, useState } from "react";

interface TabItem {
  id: number;
  name: string;
}

interface QuestTabSwitcherProperties {
  tab: number;
  setTab: (tab: number) => void;
}

const QuestTabSwitcher: React.FC<QuestTabSwitcherProperties> = ({
  tab,
  setTab,
}) => {
  const [transformValue, setTransformValue] = useState(0);

  const tabItems: TabItem[] = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Progress",
    },
    {
      id: 3,
      name: "Completed",
    },
  ];

  useEffect(() => {
    const updateTransform = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setTransformValue((tab - 1) * 100);
      } else {
        setTransformValue((tab - 1) * 110);
      }
    };

    updateTransform();

    window.addEventListener("resize", updateTransform);

    return () => {
      window.removeEventListener("resize", updateTransform);
    };
  }, [tab]);

  return (
    <div className="relative hidden flex-row items-center rounded-full bg-white p-[3px] sm:flex">
      {tabItems.map((tabItem) => (
        <div
          key={tabItem.id}
          className={`z-[1] flex w-[100px] cursor-pointer items-center justify-center rounded-full py-[5px] text-[14px] duration-300 sm:w-[110px] ${tab == tabItem.id ? "font-bold text-secondary-120" : "text-secondary-60"}`}
          onClick={() => setTab(tabItem.id)}
        >
          {tabItem.name}
        </div>
      ))}
      <div
        className={`absolute flex h-[90%] w-[100px] transform cursor-pointer items-center justify-center rounded-full bg-neutral-5 duration-300 sm:w-[110px]`}
        style={{
          transform: `translateX(${transformValue}px)`,
        }}
      ></div>{" "}
    </div>
  );
};

export default QuestTabSwitcher;
