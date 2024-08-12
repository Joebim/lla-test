"use client";

import clsx from "clsx";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useFAQStore } from "~/store/faq-store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

interface tableProperties {
  id: string;
  question: string;
  answer: string;
}

const AdminFAQTable = ({
  className,
  isModalOpen,
}: {
  className?: string;
  isModalOpen: () => void;
}) => {
  const dropdownReference = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string>();
  const { faqs, fetchFAQs } = useFAQStore();

  useEffect(() => {
    fetchFAQs();
  }, []);

  const toggleDropdown = (id: string) => {
    setIsDropdownOpen(isDropdownOpen === id ? undefined : id);
  };

  const renderRow = (data: tableProperties, index: number) => {
    const isEven = index % 2 === 1;
    const rowClass = isEven
      ? "bg-neutral-10 border-none rounded-[15px]"
      : "bg-white border-none";

    return (
      <TableRow key={data.question} className={rowClass}>
        <TableCell className="flex items-center gap-3 font-medium">
          <p>{data.question}</p>
        </TableCell>
        <TableCell className="w-[45%]">{data.answer}</TableCell>
        <TableCell>
          <div className="relative" ref={dropdownReference}>
            <EllipsisVertical
              className="w-[20px] cursor-pointer"
              onClick={() => toggleDropdown(data.id)}
            />
            {isDropdownOpen === data.id && (
              <div
                className="shadow-lg absolute right-[15px] z-10 w-[150px] rounded-[6px] border border-neutral-5 bg-white"
                style={{
                  boxShadow: "0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
                  top: "30px",
                }}
              >
                <div className="flex flex-col space-y-1 p-[2px]">
                  <button
                    className="w-full rounded-sm border-b-[1px] text-left text-sm transition-colors duration-150 hover:bg-[#F3F4F6]"
                    style={{
                      padding: "6px 8px",
                    }}
                    onClick={isModalOpen}
                  >
                    Delete
                  </button>
                  <button
                    className="w-full whitespace-nowrap rounded-sm text-left text-sm transition-colors duration-150 hover:bg-[#F3F4F6]"
                    style={{
                      padding: "6px 8px",
                    }}
                    // onClick={() => handleButtonClick("Unlink")}
                  >
                    Edit Question
                  </button>
                </div>
              </div>
            )}
          </div>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div className="w-full rounded-[10px] border-secondary-10">
      <Table className={clsx(className, "w-full")}>
        <TableHeader className="bg-neutral-10">
          <TableRow className="rounded-tl-[14px] rounded-tr-[14px] border-none">
            <TableHead className="font-semibold">Question</TableHead>
            <TableHead className="font-semibold">Answer</TableHead>
            <TableHead className="font-semibold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {faqs.map((slug, index) => renderRow(slug, index))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminFAQTable;
