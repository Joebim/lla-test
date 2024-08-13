"use client";

import clsx from "clsx";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import DashboardModal from "~/components/common/dashboardModal/DashboardModal";
import { getFAQs } from "~/store/faq-store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import CreateFAQ from "../form-modals/CreateFaq";
import DeleteFaq from "../form-modals/DeleteFaq";
import EditFAQ from "../form-modals/EditFaq";

interface tableProperties {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const AdminFAQTable = ({ className }: { className?: string }) => {
  //states
  const [searchValue] = useState("");
  const dropdownReference = useRef<HTMLDivElement>(null);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [callback, setCallback] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string>();
  const [faqs, setFaqs] = useState<tableProperties[]>([]);
  const handleCloseUpdateDialog = () => setIsEditModalOpen(false);
  const [, setIsDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<tableProperties | undefined>();

  useEffect(() => {
    const fetchFaqs = async () => {
      const result = await getFAQs();
      if (result && (result.status === 200 || result.status === 201)) {
        setFaqs(result.data.data);
      } else {
        setFaqs([]);
      }
    };
    fetchFaqs();
  }, [callback]);

  // open update dialog and set selected FAQ
  const handleOpenUpdateDialog = (faq: tableProperties) => {
    setSelectedFaq(faq);
    setIsEditModalOpen(true);
  };

  const handleOpenDialog = (faq: tableProperties) => {
    setSelectedFaq(faq);
    setIsDialogOpen(true);
  };

  // search filter
  const filteredFaqs = faqs?.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchValue.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchValue.toLowerCase()),
  );

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
                    onClick={() => handleOpenDialog(data)}
                  >
                    Delete
                  </button>
                  <button
                    className="w-full whitespace-nowrap rounded-sm text-left text-sm transition-colors duration-150 hover:bg-[#F3F4F6]"
                    style={{
                      padding: "6px 8px",
                    }}
                    onClick={() => handleOpenUpdateDialog(data)}
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
    <main className="p-0 md:p-[15px]">
      {isCreateModalOpen && (
        <DashboardModal
          onClose={() => setIsCreateModalOpen(false)}
          className="flex w-[500px] flex-col space-y-5"
        >
          <CreateFAQ
            onClose={() => setIsCreateModalOpen(false)}
            callback={callback}
            setCallback={setCallback}
          />
        </DashboardModal>
      )}

      {isEditModalOpen && selectedFaq && (
        <DashboardModal
          onClose={() => setIsEditModalOpen(false)}
          className="flex w-[500px] flex-col space-y-5"
        >
          <EditFAQ
            onClose={handleCloseUpdateDialog}
            faqs={selectedFaq}
            callback={callback}
            setCallback={setCallback}
          />
        </DashboardModal>
      )}

      {isDialogOpen && selectedFaq && (
        <DashboardModal
          onClose={() => setIsDeleteModalOpen(false)}
          className="flex w-[23rem] flex-col items-center justify-center space-y-[15px]"
        >
          <DeleteFaq
            onClose={handleCloseDialog}
            faqs={selectedFaq}
            callback={callback}
            setCallback={setCallback}
          />
        </DashboardModal>
      )}
      <div>
        <h3 className="mt-[20px] text-[18px] font-bold text-secondary-90 md:mt-0 md:text-[23px]">
          Frequently Asked Questions
        </h3>
        <p className="text-[13px] text-secondary-70">
          Set questions and their corresponding answers
        </p>
      </div>
      <section className="mt-[10px] h-[80vh] w-[100vw] rounded-[14px] bg-white md:w-[75vw]">
        <div className="flex items-center justify-end p-[14px]">
          <CustomButton
            variant="primary"
            onClick={() => setIsCreateModalOpen(true)}
          >
            + Add FAQ
          </CustomButton>
        </div>
        <div className="overflow-x-auto">
          <Table className={clsx(className, "min-w-[900px] lg:w-full")}>
            <TableHeader className="bg-neutral-10">
              <TableRow className="rounded-tl-[14px] rounded-tr-[14px] border-none">
                <TableHead className="font-semibold">Question</TableHead>
                <TableHead className="font-semibold">Answer</TableHead>
                <TableHead className="font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFaqs.map((slug, index) => renderRow(slug, index))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
};

export default AdminFAQTable;
