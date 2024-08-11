"use client";

import { useState } from "react";

import AdminFAQTable from "~/components/admin-faq-table";
import CustomButton from "~/components/common/common-button/common-button";
import DashboardModal from "~/components/common/dashboardModal/DashboardModal";
import CustomInput from "~/components/input/CustomInput";

const ManageFAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createNew, setCreateNew] = useState(false);

  const handleCloseModal = () => {
    if (createNew) {
      setCreateNew(false);
    }
  };
  return (
    <>
      {isModalOpen && (
        <DashboardModal
          onClose={() => setIsModalOpen(!isModalOpen)}
          className="flex w-[23rem] flex-col items-center justify-center space-y-[15px]"
        >
          <h3 className="text-[17px] font-bold">Delete FAQ?</h3>
          <p className="text-center text-[13px] font-medium text-secondary-90">
            Are you sure you want to delete this FAQ? This action cannot be
            undone.
          </p>
          <div className="flex w-full items-center gap-2 border-t-[5px] border-t-neutral-5 py-[15px]">
            <CustomButton variant="neutral" className="w-full">
              Cancel
            </CustomButton>
            <CustomButton
              variant="default"
              className="w-full bg-critical-90 text-white"
            >
              Delete
            </CustomButton>
          </div>
        </DashboardModal>
      )}
      {createNew && (
        <DashboardModal
          onClose={handleCloseModal}
          className="flex w-[500px] flex-col space-y-5"
        >
          <h2 className="text-center text-[22px] font-bold">
            Add New Question and Answer
          </h2>
          <div className="flex flex-col">
            <label htmlFor="question" className="text-secondary-50">
              Question
            </label>
            <CustomInput
              inputType="text"
              name="question"
              placeholder="Question"
              className="placeholder:text-[12px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="answer" className="text-secondary-50">
              Answer
            </label>
            <textarea
              draggable={false}
              rows={6}
              name="answer"
              placeholder="write answer to question here"
              className="rounded-[8px] border-[2px] border-neutral-20 p-[8px] outline-none placeholder:text-[12px]"
            ></textarea>
          </div>
          <div className="mt-[20px] border-t-[5px] border-t-neutral-10 pt-[20px]">
            <CustomButton variant="primary" className="w-full">
              Add Question
            </CustomButton>
          </div>
        </DashboardModal>
      )}
      <main className="p-[15px]">
        <div>
          <h3 className="text-[23px] font-bold text-secondary-90">
            Frequently Asked Questions
          </h3>
          <p className="text-[13px] text-secondary-70">
            Set questions and their corresponding answers
          </p>
        </div>
        <section className="mt-[10px] h-[100%] rounded-[14px] bg-white">
          <div className="flex items-center justify-end p-[14px]">
            <CustomButton variant="primary" onClick={() => setCreateNew(true)}>
              Add Question
            </CustomButton>
          </div>
          <section>
            <AdminFAQTable isModalOpen={() => setIsModalOpen(true)} />
          </section>
        </section>
      </main>
    </>
  );
};

export default ManageFAQ;
