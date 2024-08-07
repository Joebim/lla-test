"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "./_components/Breadcrumb";

const QuestPreview = () => {
  return (
    <section className="flex min-h-screen flex-col gap-6 bg-neutral-5 px-[20px] pb-[74px] pt-[50px] font-axiforma sm:px-[74px]">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex flex-col gap-5 lg:gap-10">
          <Breadcrumb />
          <h2 className="text-[28px] font-semibold leading-[42px] text-secondary-120">
            The Burning Building
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 sm:flex-nowrap">
          <Image
            src="/quests-preview/quest-1-mini.png"
            alt="preview-image"
            width={120}
            height={120}
            className="size-[120px] cursor-pointer rounded-2xl duration-200 hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/jpeg..."
          />
          <Image
            src="/quests-preview/quest-2-mini.png"
            alt="preview-image"
            width={120}
            height={120}
            className="size-[120px] cursor-pointer rounded-2xl duration-200 hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/jpeg..."
          />
          <Image
            src="/quests-preview/quest-3-mini.png"
            alt="preview-image"
            width={120}
            height={120}
            className="size-[120px] cursor-pointer rounded-2xl duration-200 hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/jpeg..."
          />
          <Image
            src="/quests-preview/quest-4-mini.png"
            alt="preview-image"
            width={120}
            height={120}
            className="size-[120px] cursor-pointer rounded-2xl duration-200 hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/jpeg..."
          />
        </div>
      </div>

      <div className="flex h-[731px] w-full items-end self-stretch rounded-3xl bg-[url('/quests-preview/burning-building.png')] bg-cover bg-no-repeat p-5 sm:p-10 lg:p-20">
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-8">
          <div className="flex flex-col gap-8 rounded-b-[48px] rounded-t-[28px] border border-transparent-white-20 bg-transparent-black-60 p-6 backdrop-blur-lg lg:w-[600px]">
            <div className="flex flex-col gap-7">
              <span className="flex flex-col gap-6">
                <h2 className="text-[32px] font-bold leading-[48px] text-primary-100">
                  The Burning Building
                </h2>

                <p className="text-lg text-secondary-20">
                  Lora lives in California and needs to get on the plane to
                  Paris where she meets her boss for Fashion Week. Problem is,
                  she just might miss that flight and get fired. How fast can
                  you help her get to the airport?
                </p>
              </span>

              <div className="flex items-center gap-3">
                <span className="flex w-max gap-[10px] rounded-[10px] border border-transparent-white-20 bg-transparent-white-10 p-[10px] font-medium text-secondary-40">
                  0 / 8 Pages
                </span>
                <span className="size-[10px] rounded-full border border-secondary-30" />
              </div>
            </div>

            <span className="flex justify-between gap-5">
              <Link
                href="/dashboard/quests"
                className="w-full rounded-full border-b border-secondary-30 bg-primary-10 px-8 py-[10px] text-center text-lg font-semibold text-primary-100 duration-200 hover:border hover:bg-primary-10/90 active:scale-95"
              >
                Back
              </Link>
              <button
                type="button"
                className="w-full rounded-full border-b border-primary-120 bg-primary-100 px-8 py-[10px] text-lg font-semibold text-white duration-200 hover:border hover:bg-primary-100/90 active:scale-95"
              >
                Start Quest
              </button>
            </span>
          </div>

          <div className="flex items-end justify-end gap-6">
            <button
              type="button"
              className="active:border-transparent-white-75 flex size-[52px] items-center justify-center rounded-full border border-transparent-white-10 bg-transparent-black-25 active:bg-transparent-black-65"
            >
              <p className="sr-only">Previous</p>
              <ChevronLeft className="size-6 text-white" />
            </button>

            <button
              type="button"
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
