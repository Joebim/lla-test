"use client";

import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { overviewData, userData } from "./data";
import { ChevronLeft, ChevronRight, ExpandMore, FilterIcon } from "./icons";

export default function Overview() {
  const [data, setData] = useState(userData);

  const activeFilterHandler = () => {
    const results = userData.filter((item) => item.isActive);
    setData(results);
  };

  const inActiveFilterHandler = () => {
    const results = userData.filter((item) => !item.isActive);
    setData(results);
  };

  return (
    <div className="font-axiforma">
      <header className="mb-[33px] grid grid-cols-2 gap-[24px] lg:grid-cols-4">
        {overviewData.map((data, index) => (
          <div
            key={index}
            className="rounded-[12px] border-[1px] border-neutral-40 p-[24px]"
          >
            <div className="mb-[24px] flex items-center justify-between gap-2">
              <h2 className="text-[14px] font-bold text-neutral-100">
                {data.title}
              </h2>
              <div className="shrink-0">{data.icon}</div>
            </div>
            <h1 className="text-secondary-140 font-axiformaExtraBold text-[24px] lg:text-[32px]">
              {data.amount.toLocaleString()}
            </h1>
          </div>
        ))}
      </header>
      <div className="mb-[32px] flex justify-between gap-2">
        <div>
          <h1 className="mb-[10px] font-axiformaExtraBold text-[24px] text-[#525252]">
            Manage Users
          </h1>
          <p className="text-[#525252]">Manage Users & Track Activity</p>
        </div>
        <div className="flex gap-[16px] self-center">
          <button className="flex h-[44px] items-center gap-[14px] rounded-[4px] border-[1px] border-[#CBD5E1] px-[15px] py-[12.5px] hover:border-primary-100">
            <span className="text-[14px]">Export</span>
            <ExpandMore />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex h-[44px] items-center gap-[11px] rounded-[4px] border-[1px] border-[#CBD5E1] px-[15px] py-[12.5px] hover:border-primary-100">
                <FilterIcon />
                <span className="text-[14px]">Filter</span>
                <ExpandMore />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="min-w-[182px] rounded-[6px] border-[1px] border-neutral-40 bg-white"
            >
              <DropdownMenuLabel className="pb-0 text-[12px] font-normal text-[#AAAAAA]">
                By status
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={activeFilterHandler}
                className="border-b-[1px] border-b-neutral-40 text-[#09090B]"
              >
                Active users
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={inActiveFilterHandler}
                className="border-b-[1px] border-b-neutral-40 text-[#09090B]"
              >
                Inactive users
              </DropdownMenuItem>
              <DropdownMenuLabel className="text-[12px] font-normal text-[#AAAAAA]">
                By date
              </DropdownMenuLabel>
              <div className="flex items-center justify-between px-[8px] pb-[8px] text-[#09090B]">
                <button className="flex items-center gap-[6px] text-[14px]">
                  From
                  <ExpandMore />
                </button>
                <button className="flex items-center gap-[6px] text-[14px]">
                  To
                  <ExpandMore />
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Table */}
      <div className="w-full">
        <div>
          <div className="grid min-h-[58px] w-full grid-cols-[120px_1fr_240px_200px_100px] justify-between gap-2 rounded-t-[12px] px-[24px] py-[16px] odd:bg-neutral-10 even:bg-white 2xl:px-[56px]">
            <h3>User ID</h3>
            <h3>Name</h3>
            <h3>Signup Date</h3>
            <h3>Status</h3>
            <h3>Action</h3>
          </div>
          {data.map((data, index) => (
            <div
              key={index}
              className="grid min-h-[58px] w-full grid-cols-[120px_1fr_240px_200px_100px] items-center justify-between gap-2 px-[24px] py-[16px] odd:bg-neutral-10 even:bg-white 2xl:px-[56px]"
            >
              <h3 className="text-[#0A0A0A]">{data.uid}</h3>
              <div className="flex gap-[8px]">
                <figure>
                  <Image
                    src={data.image}
                    alt="Avatar"
                    width={45}
                    height={45}
                    className="w-[45px] shrink-0"
                  />
                </figure>
                <div>
                  <h1 className="font-medium text-[#0A0A0A]">{data.name}</h1>
                  <p className="text-[14px] text-[#525252]">{data.email}</p>
                </div>
              </div>
              <h3>{data.signupDate}</h3>
              <div>
                {data.isActive ? (
                  <div className="flex items-center gap-[8px] text-[#0A0A0A]">
                    <div className="h-[12px] w-[12px] rounded-full bg-[#6DC347]"></div>
                    <p className="mt-1">Active</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-[8px] text-[#0A0A0A]">
                    <div className="h-[12px] w-[12px] rounded-full bg-[#DC2626]"></div>
                    <p className="mt-1">Inactive</p>
                  </div>
                )}
              </div>
              <div className="grid place-items-center self-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="text-neutral-dark-2 bg-transparent hover:bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      size={"icon"}
                    >
                      <EllipsisVertical size={16} color="#09090b" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="min-w-0 rounded-[6px] bg-white"
                  >
                    <DropdownMenuLabel className="sr-only">
                      Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="pr-8 text-center" inset>
                      View
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex items-center gap-[16px] pt-[20px]">
          <Button className="flex items-center gap-[11px] font-semibold">
            <ChevronLeft />
            <div className="mt-[2px]">Previous</div>
          </Button>
          <div className="flex font-medium text-[#09090B]">
            <button className="grid h-[40px] w-[40px] place-items-center rounded-[6px]">
              1
            </button>
            <button className="grid h-[40px] w-[40px] place-items-center rounded-[6px] border-[1px] border-[#E4E4E7]">
              2
            </button>
            <button className="grid h-[40px] w-[40px] place-items-center rounded-[6px]">
              3
            </button>
          </div>
          <Button className="flex items-center gap-[11px] font-semibold">
            <div className="mt-[2px]">Next</div>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
