"use client";

import { useState } from "react";

import AdminFAQTable from "~/components/admin-faq-table";
import CustomButton from "~/components/common/common-button/common-button";
import DashboardModal from "~/components/common/dashboardModal/DashboardModal";

const ManageFAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      {isModalOpen && (
        <DashboardModal onClose={() => setIsModalOpen(!isModalOpen)}>
          <div>
            <h3>Delete FAQ?</h3>
            <p>
              Are you sure you want to delete this FAQ? This action cannot be
              undone.
            </p>
            <div>
              <CustomButton>Cancel</CustomButton>
              <CustomButton variant="default">Delete</CustomButton>
            </div>
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
            <CustomButton variant="primary">Add Question</CustomButton>
          </div>
          <section>
            <AdminFAQTable />
          </section>
        </section>
      </main>
    </>
  );
};

export default ManageFAQ;
