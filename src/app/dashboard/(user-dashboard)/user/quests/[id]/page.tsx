/* eslint-disable no-console */
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "~/components/common/common-button";
import { Skeleton } from "~/components/ui/skeleton";
import { getPreviewQuest } from "~/lib/services/userDashboard";
import { QuestExitModal } from "../_components/quest-exit-modal";
import { preview, userQuests } from "../../userDashboardTypes";

const QuestPreview = ({ params }: { params: { id: string } }) => {
  console.log("id,", params?.id);
  const [gameStatus] = useState<string>("paused");
  const [questPreview, setQuestPreview] = useState<userQuests>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPreviewQuest() {
      setIsLoading(true);
      try {
        if (params?.id !== undefined) {
          const response = await getPreviewQuest(params?.id);
          console.log({ response });
          setQuestPreview(response?.data?.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPreviewQuest();
  }, [params?.id]);
  const [indexNo, setIndexNo] = useState(0);
  return (
    <section className="flex min-h-screen flex-col gap-6 bg-neutral-5 px-[20px] pb-[74px] pt-[50px] font-axiforma sm:px-[74px]">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div>
            <div className="flex gap-1 text-secondary-70">
              <Link
                href="/dashboard/user/quests"
                className="duration-150 hover:underline active:scale-95"
              >
                Quests
              </Link>
              <span className="text-secondary-70">/</span>
              {isLoading ? (
                <Skeleton className="h-[20px] max-w-[70px] rounded-lg bg-neutral-70" />
              ) : (
                <h2 className="text-secondary-70">
                  {questPreview && questPreview.title}
                </h2>
              )}
            </div>
          </div>{" "}
          {isLoading ? (
            <Skeleton className="h-[20px] max-w-[70px] rounded-lg bg-neutral-70" />
          ) : (
            <h2 className="text-[28px] font-semibold leading-[42px] text-secondary-120">
              {questPreview && questPreview.title}
            </h2>
          )}
        </div>
        {isLoading ? (
          <div className="flex flex-wrap gap-[10px] sm:flex-nowrap sm:gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-[60px] w-[60px] bg-neutral-70 sm:h-[120px] sm:w-[120px]"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-[10px] sm:flex-nowrap sm:gap-4">
            {questPreview &&
              questPreview.previews.map((quest: preview, index: number) => (
                <div
                  key={index}
                  className={`${indexNo === index && "rounded-[10px] border-solid border-orange-500"} `}
                >
                  {quest.thumbnail && (
                    <Image
                      src={quest.thumbnail}
                      alt="preview-image"
                      width={120}
                      height={120}
                      onClick={() => setIndexNo(index)}
                      className={`${indexNo === index && "rounded-[10px] border-orange-500"} size-[120px] h-[70px] w-[70px] cursor-pointer rounded-[10px] duration-200 hover:scale-105 sm:h-[100px] sm:w-[100px] sm:rounded-2xl`}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg..."
                    />
                  )}
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="flex h-[731px] w-full items-end self-stretch rounded-3xl bg-[url('/quests-preview/burning-building.png')] bg-cover bg-no-repeat p-5 sm:p-10 lg:p-20">
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-8">
          <div className="flex flex-col gap-8 rounded-b-[48px] rounded-t-[28px] border border-transparent-white-20 bg-transparent-black-60 p-6 backdrop-blur-lg lg:w-[600px]">
            <div className="flex flex-col gap-7">
              <span className="flex">
                <p className="text-lg text-secondary-20">
                  {questPreview && questPreview.previews[indexNo].description}
                </p>
              </span>

              <div className="flex items-center gap-3">
                <span className="flex w-max gap-[10px] rounded-[10px] border border-transparent-white-20 bg-transparent-white-10 p-[10px] font-medium text-secondary-40">
                  0 /{" "}
                  {questPreview &&
                    questPreview.previews[indexNo].size.toString()}{" "}
                  Pages
                </span>
                <span className="size-[10px] rounded-full border border-secondary-30" />
              </div>
            </div>

            <span className="flex flex-col justify-between gap-5">
              {gameStatus == "completed" ? (
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full text-[15px] font-[600] active:scale-95"
                >
                  Restart Quest
                </Button>
              ) : (
                <>
                  {gameStatus == "paused" ? (
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full text-[15px] font-[600] active:scale-95"
                    >
                      Continue Quest
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full text-[15px] font-[600] active:scale-95"
                    >
                      Start Quest
                    </Button>
                  )}
                  {gameStatus == "paused" ? (
                    <QuestExitModal>
                      <Button
                        variant="primary-two"
                        size="lg"
                        className="w-full text-[15px] font-[600] text-black active:scale-95"
                      >
                        Exit Quest
                      </Button>
                    </QuestExitModal>
                  ) : (
                    <Link href="/dashboard/user/quests">
                      <Button
                        variant="primary-two"
                        size="lg"
                        className={`w-full text-[15px] font-[600] text-black active:scale-95 ${gameStatus == "idle" ? "hidden" : "block"}`}
                      >
                        Back
                      </Button>
                    </Link>
                  )}
                </>
              )}
            </span>
          </div>

          <div className="flex items-end justify-end gap-6">
            <button
              type="button"
              onClick={() => indexNo > 0 && setIndexNo(indexNo - 1)}
              className="active:border-transparent-white-75 flex size-[52px] items-center justify-center rounded-full border border-transparent-white-10 bg-transparent-black-25 active:bg-transparent-black-65"
            >
              <p className="sr-only">Previous</p>
              <ChevronLeft className="size-6 text-white" />
            </button>

            <button
              type="button"
              onClick={() =>
                questPreview &&
                indexNo > questPreview?.previews.length &&
                setIndexNo(indexNo - 1)
              }
              className="border-transparent-white-75 flex size-[52px] items-center justify-center rounded-full border bg-transparent-black-65"
            >
              <p className="sr-only">Next</p>
              <ChevronRight className="size-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestPreview;
