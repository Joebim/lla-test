"use client";

import Image from "next/image";

import CloseImage from "../../../../public/adminRoles/close.svg";

interface deleteAdminProperties {
  setShowDeletingInvitationModal: (value: boolean) => void;
  setOpenDeletedModal: (value: boolean) => void;
}

const DeleteInvitation = ({
  setShowDeletingInvitationModal,
  setOpenDeletedModal,
}: deleteAdminProperties) => {
  const deleteButton = () => {
    setShowDeletingInvitationModal(false);
    setOpenDeletedModal(true);
  };
  return (
    <div className="">
      <div
        className="fixed inset-0 flex items-center justify-center bg-black opacity-[50%] backdrop-blur-sm"
        onClick={() => setOpenDeletedModal}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className={`shadow-4xl relative max-w-[30.5rem] rounded-[1rem] bg-white px-[1.2rem] py-4 sm:px-[2.25rem] sm:py-8`}
        >
          <div className="absolute right-3 top-3">
            <Image
              onClick={() => setOpenDeletedModal}
              src={CloseImage}
              alt="close"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </div>{" "}
          <div className="flex flex-col items-center">
            <h1 className="text-center font-axiforma text-[1.2rem] font-bold leading-[2rem] text-[#2A2A2A] sm:text-[1.75rem] sm:leading-[2.625rem]">
              Delete Invitation{" "}
            </h1>
            <p className="text-center font-inter text-base font-normal leading-[1.5rem] text-[#2A425D] sm:mt-[1.5rem] sm:w-[80%] sm:text-[1.125rem]">
              Are you sure you want to delete this Admin? This action cannot be
              undone.{" "}
            </p>

            <div className="hidden h-[0.5rem] self-stretch bg-[#F4F6F9] sm:mt-[2rem] sm:block"></div>
            <div className="flex w-full items-center gap-6 sm:mt-[1.5rem]">
              <button
                onClick={() => setShowDeletingInvitationModal(false)}
                className={`shadowBtn duration-[0.5s] flex w-full items-center justify-center rounded-[3.6875rem] border border-b border-solid border-[#D6D6D6] bg-[#E3E3E3] bg-[transparent] px-4 py-[0.8rem] font-inter text-sm font-medium leading-[1.1rem] tracking-wider text-[#454545] transition hover:bg-[#E3E3E3] sm:text-[1rem]`}
              >
                Cancel
              </button>
              <button
                onClick={deleteButton}
                className={`shadowBtn duration-[0.5s] flex w-full items-center justify-center rounded-[3.6875rem] border border-b border-solid border-[#ff0000] bg-[#ff0000] px-4 py-[0.8rem] font-inter text-sm font-medium leading-[1.1rem] tracking-wider text-[#FFFFFF] transition hover:bg-[#ff0000] sm:text-[1rem]`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteInvitation;
