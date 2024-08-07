"use client";

import Image from "next/image";

import CloseImage from "../../../../public/adminRoles/close.svg";
import success from "../../../../public/adminRoles/success.svg";

interface ConfirmDeletedInvitationsProperties {
  setOpen: () => void;
  setOpenDeletedModal: (value: boolean) => void;
  title: string;
}

const ConfirmDeletedInvitations = ({
  setOpen,
  setOpenDeletedModal,
  title,
}: ConfirmDeletedInvitationsProperties) => {
  return (
    <div className="">
      <div
        className="fixed inset-0 flex items-center justify-center bg-black opacity-[50%] backdrop-blur-sm"
        onClick={setOpen}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className={`shadow-4xl relative max-w-[30.5rem] rounded-[1rem] bg-white px-[1.2rem] py-4 sm:px-[2.25rem] sm:py-8`}
        >
          <div className="absolute right-3 top-3">
            <Image
              onClick={setOpen}
              src={CloseImage}
              alt="close"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </div>{" "}
          <div className="flex flex-col items-center justify-center">
            <Image
              className="mt-[1rem]"
              src={success}
              alt="success"
              width={80}
              height={80}
            />
            <h1 className="text-center font-axiforma text-[1.2rem] font-bold leading-[2rem] text-[#2A2A2A] sm:text-[1.75rem] sm:leading-[2.625rem]">
              Delete Invitation
            </h1>
            <p className="text-center font-inter text-base font-normal leading-[1.5rem] text-[#2A425D] sm:mt-[1.5rem] sm:w-[80%] sm:text-[1.125rem]">
              Your invitations to {title} have been successfully deleted
            </p>
            <button
              onClick={() => setOpenDeletedModal(false)}
              className={`mt-[1.5rem] flex w-full items-center justify-center rounded-[3.6875rem] border border-solid border-[#CC4900] bg-[#FE6A19] py-[0.62rem] font-inter text-[1.125rem] font-semibold leading-[1.75rem] text-white`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletedInvitations;
