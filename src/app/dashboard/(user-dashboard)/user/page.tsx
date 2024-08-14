/* eslint-disable no-console */
"use client";

import { Gamepad } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { getAllQuests } from "~/actions/userDashboardQuest.ts/route";
import { Tabs, TabsContent } from "~/components/ui/tabs";
import { useToast } from "~/components/ui/use-toast";
import DifficultySelect from "./components/DifficultySelect";
import LoadingQuestCard from "./components/LoadingQuestCard";
import QuestCard from "./components/QuestCard";
import TabsMenu from "./components/TabsMenu";
import WelcomeBanner from "./components/WelcomeBanner";
import { questsDummyData, QuestsDummyDataProperties } from "./data/dummyData";
import { userQuests } from "./userDashboardTypes";

export interface TabMenuProperties {
  id: number;
  value: string;
  title: string;
}

const tabMenuData: TabMenuProperties[] = [
  {
    id: 1,
    value: "allQuests",
    title: "All",
  },

  {
    id: 2,
    value: "inProgress",
    title: "In Progress",
  },

  {
    id: 3,
    value: "completed",
    title: "Completed",
  },
];

const UserDashboard = () => {
  const [questData, setQuestData] = useState<
    QuestsDummyDataProperties[] | undefined
  >();
  const { data: session } = useSession();
  const { toast } = useToast();

  // GET dummy quest data
  useEffect(() => {
    const getDummyQuestData = () => {
      // set timeout of 3 sec to simulate fetching from an actual api
      setTimeout(() => {
        setQuestData(questsDummyData);
      }, 3000);
    };

    getDummyQuestData();
  }, []);

  const [quests, setQuests] = useState<userQuests[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);

    async function fetchData() {
      try {
        const response = await getAllQuests(session?.access_token);
        setQuests(response?.data?.data?.data || []);
        console.log({ response });
        // console.log(response?.data?.data?.data[0].vocabularies.length)
        setIsLoading(false);
      } catch {
        toast({
          title: "Error",
          description: "error occured while fetching quests",
          variant: "critical",
        });
        setIsLoading(false);
      }
    }
    fetchData();
  }, [session?.access_token, toast]);
  // const changeVocabulariesToArray = (jsonString: string) => {
  //   const jsonObject = JSON.parse(jsonString);
  //   const keysArray = Object.keys(jsonObject);
  //   const valuesArray = Object.values(jsonObject);

  //   const combinedArray = [...keysArray, ...valuesArray];
  //   return combinedArray;
  // };
  return (
    <>
      <div className="lg:mx-6">
        {" "}
        <WelcomeBanner />
        <Tabs
          defaultValue={tabMenuData[0].value}
          className="mt-6 w-full md:mt-5"
        >
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0">
            <div className="lg:mr-auto">
              <h3
                className="text-xl capitalize leading-7 text-secondary-110"
                style={{ fontFamily: "Axiforma-SemiBold" }}
              >
                Quests
              </h3>

              <p
                className="text-xs leading-6 text-secondary-100 md:text-sm xl:text-base"
                style={{ fontFamily: "Axiforma" }}
              >
                Pick a quest, Delve In, Learn new words and save the day.
              </p>
            </div>

            <div className="flex flex-row items-center gap-2 md:gap-4 xl:gap-6">
              <div className="mr-auto md:mr-0">
                <TabsMenu tabMenuData={tabMenuData} />
              </div>
              <DifficultySelect />
            </div>
          </div>
          <div className="mt-5 rounded-3xl bg-white p-4 ring-1 ring-neutral-40">
            <TabsContent className="h-full" value="allQuests">
              {isLoading ? (
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                </div>
              ) : (
                (() => {
                  if (quests.length === 0) {
                    return (
                      <>
                        <div className="flex h-[400px] w-full flex-col items-center justify-center space-y-3 text-transparent-black-35">
                          <Gamepad strokeWidth={0.5} size={120} />

                          <h3
                            className="text-center text-base leading-10 md:text-xl"
                            style={{ fontFamily: "Axiforma" }}
                          >
                            You currently have no quests.
                          </h3>
                        </div>
                      </>
                    );
                  }

                  return (
                    <>
                      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                        {quests.map((data: userQuests, index: number) => {
                          const { id, thumbnail, title } = data;
                          const vocabulariesObject = JSON.parse(
                            data?.vocabularies,
                          );
                          const vocabulariesLength =
                            Object.keys(vocabulariesObject).length;
                          return (
                            <QuestCard
                              id={id}
                              image={thumbnail}
                              numberOfWords={vocabulariesLength}
                              title={title}
                              key={index}
                            />
                          );
                        })}
                      </div>
                    </>
                  );
                })()
              )}
            </TabsContent>
            <TabsContent className="h-full" value="inProgress">
              {questData ? (
                (() => {
                  const filteredQuestData = questData.filter(
                    (data) => data.status.inprogress,
                  );

                  if (filteredQuestData.length === 0) {
                    return (
                      <>
                        <div className="flex h-[400px] w-full flex-col items-center justify-center space-y-3 text-transparent-black-35">
                          <Gamepad strokeWidth={0.5} size={120} />

                          <h3
                            className="text-center text-base leading-10 md:text-xl"
                            style={{ fontFamily: "Axiforma" }}
                          >
                            You currently have no quest in progress.
                          </h3>
                        </div>
                      </>
                    );
                  }

                  // return (
                  //   <>
                  //     <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                  //       {filteredQuestData.map((data, index) => {
                  //         const { id, image, title } = data;

                  //         return (
                  //           <QuestCard
                  //             id={id}
                  //             image={image}
                  //             // numberOfWords={numberOfWord}
                  //             title={title}
                  //             key={index}
                  //           />
                  //         );
                  //       })}
                  //     </div>
                  //   </>
                  // );
                })()
              ) : (
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                </div>
              )}
            </TabsContent>
            <TabsContent className="h-full" value="completed">
              {questData ? (
                (() => {
                  const filteredQuestData = questData.filter(
                    (data) => data.status.completed,
                  );

                  if (filteredQuestData.length === 0) {
                    return (
                      <>
                        <div className="flex h-[400px] w-full flex-col items-center justify-center space-y-3 text-transparent-black-35">
                          <Gamepad strokeWidth={0.5} size={120} />

                          <h3
                            className="text-center text-base leading-10 md:text-xl"
                            style={{ fontFamily: "Axiforma" }}
                          >
                            You currently have no quest completed.
                          </h3>
                        </div>
                      </>
                    );
                  }

                  // return (
                  //   <>
                  //     <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                  //       {filteredQuestData.map((data, index) => {
                  //         const { id, image, numberOfWord, title } = data;

                  //         return (
                  //           <QuestCard
                  //             id={id}
                  //             image={image}
                  //             numberOfWords={numberOfWord}
                  //             title={title}
                  //             key={index}
                  //           />
                  //         );
                  //       })}
                  //     </div>
                  //   </>
                  // );
                })()
              ) : (
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default UserDashboard;
