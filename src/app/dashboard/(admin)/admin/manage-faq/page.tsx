"use client";

import { useEffect, useState } from "react";

import AdminFAQTable from "~/components/admin-faq/admin-faq-table";
import CreateFAQ from "~/components/admin-faq/form-modals/CreateFAQ";
import EditFAQ from "~/components/admin-faq/form-modals/EditFAQ";
import CustomButton from "~/components/common/common-button/common-button";
import DashboardModal from "~/components/common/dashboardModal/DashboardModal";
import { useFAQStore } from "~/store/faq-store";

const ManageFAQ = () => {
  //states
  const [error, setError] = useState("");
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchFAQs, addFAQ, addSuccess } = useFAQStore();
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });

  //close modal
  const handleCloseModal = () => {
    if (createModal) {
      setCreateModal(false);
    }
    if (editModal) {
      setEditModal(false);
    }
    setNewFAQ({ question: "", answer: "" });
    setError("");
  };

  //fetch all FAQs
  useEffect(() => {
    fetchFAQs();
  }, [fetchFAQs]);

  //adds new FAQ
  const handleAdd = async () => {
    if (!newFAQ.question || !newFAQ.answer) {
      setError("Can't be empty!");
      return;
    } else {
      setError("");
    }
    if (addSuccess) {
      setCreateModal(false);
    } else {
      return;
    }
    await addFAQ(newFAQ.question, newFAQ.answer);
    setNewFAQ({ question: "", answer: "" });
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
      {editModal && (
        <DashboardModal
          onClose={handleCloseModal}
          className="flex w-[500px] flex-col space-y-5"
        >
          <EditFAQ
            onClose={handleCloseModal}
            question={newFAQ.question}
            answer={newFAQ.answer}
            error={error}
            onAdd={handleAdd}
            onQuestionChange={(event) =>
              setNewFAQ({ ...newFAQ, question: event.target.value })
            }
            onAnswerChange={(event) =>
              setNewFAQ({ ...newFAQ, answer: event.target.value })
            }
          />
        </DashboardModal>
      )}
      {createModal && (
        <DashboardModal
          onClose={handleCloseModal}
          className="flex w-[500px] flex-col space-y-5"
        >
          <CreateFAQ
            onClose={handleCloseModal}
            question={newFAQ.question}
            answer={newFAQ.answer}
            error={error}
            onAdd={handleAdd}
            onQuestionChange={(event) =>
              setNewFAQ({ ...newFAQ, question: event.target.value })
            }
            onAnswerChange={(event) =>
              setNewFAQ({ ...newFAQ, answer: event.target.value })
            }
          />
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
            <CustomButton
              variant="primary"
              onClick={() => setCreateModal(true)}
            >
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
