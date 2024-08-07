import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";

import { TabMenuProperties } from "../page";

const TabsMenu = ({ tabMenuData }: { tabMenuData: TabMenuProperties[] }) => {
  const [currentTab, setCurrentTab] = useState<string>("");

  // set current tab by default on page load
  useEffect(() => {
    const setCurrentTabByDefult = () => {
      const findCurrentTab = tabMenuData.find((data) => data.id === 1);

      if (findCurrentTab) {
        setCurrentTab(findCurrentTab.value);
      }
    };

    setCurrentTabByDefult();
  }, [tabMenuData]);

  // set current tab when tab changes on click event
  const setCurrentTabOnClick = (id: number) => {
    const findCurrentTab = tabMenuData.find((data) => data.id === id);

    if (findCurrentTab) {
      setCurrentTab(findCurrentTab.value);
    }
  };

  return (
    <>
      <TabsList className="h-full rounded-full bg-white p-1 ring-1 ring-neutral-40">
        {tabMenuData.map((data, index) => {
          const { id, title, value } = data;

          return (
            <TabsTrigger
              key={index}
              onClick={() => setCurrentTabOnClick(id)}
              style={{ fontFamily: "Axiforma" }}
              className={`whitespace-nowrap rounded-full px-2.5 py-2 text-xs outline-none duration-300 ease-in focus:bg-neutral-30 focus:text-secondary-120 focus:shadow-inner-button active:bg-neutral-30 active:text-secondary-120 md:px-7 md:py-2.5 md:text-sm ${currentTab === value ? "bg-neutral-30 text-secondary-120 shadow-inner-button" : "bg-transparent text-secondary-60"}`}
              value={value}
            >
              {title}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </>
  );
};

export default TabsMenu;
