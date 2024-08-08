"use client";

import Image from "next/image";

import CloseImage from "../../../../public/adminRoles/close.svg";

interface deleteAdminProperties {
  setOpen: () => void;
  admin: {
    name: string;
    email: string;
  };
}

const DeleteAdmin = ({ setOpen, admin }: deleteAdminProperties) => {
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
            <h1 className="text-center font-axiforma text-[1.2rem] font-bold leading-[2rem] text-[#2A2A2A] sm:text-[1.75rem] sm:leading-[2.625rem]">
              Delete Admin
            </h1>
            <p className="text-center font-inter text-base font-normal leading-[1.5rem] text-[#2A425D] sm:mt-[1.5rem] sm:text-[1.125rem]">
              Are you sure you want to delete {admin.name}? This action cannot
              be undone.
            </p>
            <div className="hidden h-[0.5rem] self-stretch bg-[#F4F6F9] sm:mt-[2rem] sm:block"></div>
            <div className="mt-[1.5rem] flex w-full items-center gap-6">
              <button
                className="shadowBtn flex w-full items-center justify-center rounded-[3.6875rem] border border-b border-solid border-[#E7E7E7] bg-[#F8FAFB] py-[0.62rem] font-inter text-[1.125rem] font-semibold leading-[1.75rem] text-[#1B1B1B]"
                onClick={() => setOpen()}
              >
                Cancel
              </button>
              <button className="flex w-full items-center justify-center rounded-[3.6875rem] border border-solid border-[#FF000D] bg-[#FF1925] py-[0.62rem] font-inter text-[1.125rem] font-semibold leading-[1.75rem] text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAdmin;
