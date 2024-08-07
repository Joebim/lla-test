"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function QuestTabDropdown() {
  const [selectedItem, setSelectedItem] = useState("Beginner");

  const dropDownItems = [
    {
      name: "Beginner",
    },
    {
      name: "Intermediate",
    },
    {
      name: "Advanced",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex w-[200px] cursor-pointer flex-row items-center justify-center rounded-[10px] bg-white px-[25px] py-[12px] duration-300">
          <div className="flex flex-row items-center gap-[10px]">
            <p className="">{selectedItem}</p>
            <ChevronDown />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 overflow-hidden rounded-[12px] bg-white p-0">
        {dropDownItems.map((item, id) => (
          <DropdownMenuItem
            key={id}
            onClick={() => setSelectedItem(item.name)}
            className={`h-[35px] hover:bg-neutral-30 hover:text-neutral-140 duration-300${selectedItem == item.name ? "bg-neutral-30" : ""}`}
          >
            <span>{item.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
