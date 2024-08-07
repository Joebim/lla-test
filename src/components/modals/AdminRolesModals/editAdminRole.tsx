"use client";

import Image from "next/image";
import { useState } from "react";

import CloseImage from "../../../../public/adminRoles/close.svg";
import dropDown from "../../../../public/adminRoles/dropdown.svg";

interface Admin {
  name: string;
  email: string;
  status: string;
  role: string;
  dateSent: string;
}
interface EditAdminProperties {
  setOpen: () => void;
  admin: Admin;
}

const EditAdmin: React.FC<EditAdminProperties> = ({ setOpen, admin }) => {
  const [dropDownOpen, setDropdownOpen] = useState(false);
  const [newRole, setNewRole] = useState(admin.role);

  const dropDownList = ["Content Creator", "Developer"];

  return (
    <div className="">
      <div
        className="fixed inset-0 flex items-center justify-center bg-black opacity-[50%] backdrop-blur-sm"
        onClick={setOpen}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className={`shadow-4xl relative max-w-[37.5rem] rounded-[1rem] bg-white px-[1.2rem] py-4 sm:px-[2.25rem] sm:py-8`}
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
          <div className="flex flex-col items-center">
            <h1 className="text-center font-axiforma text-[1.2rem] font-bold leading-[2rem] text-[#2A2A2A] sm:text-[1.75rem] sm:leading-[2.625rem]">
              Edit Admin Role
            </h1>
            <p className="text-center font-inter text-base font-normal leading-[1.5rem] text-[#2A425D] sm:mt-[1.5rem] sm:text-[1.125rem]">
              Change the Admin role for {admin.name}
            </p>
            <div className="mt-4 flex w-full flex-col gap-[0.25rem] sm:mt-8">
              <label className="font-inter text-base font-normal leading-[1.5rem] text-[#9BB1C9]">
                Select admin role
              </label>
              <div className="relative">
                <div
                  className={`active:shadow-custom-purple active:border-primary-default focus-within:border-primary-default focus-within:shadow-custom-purple relative flex w-full items-center gap-[15px] rounded-[8px] border bg-white px-[16px] py-[12px] duration-100`}
                >
                  {newRole}
                </div>
                <Image
                  className="absolute right-[20px] top-[15px] cursor-pointer"
                  src={dropDown}
                  alt="dropdown"
                  width={15}
                  height={15}
                  onClick={() => setDropdownOpen((previous) => !previous)}
                />
                {dropDownOpen && (
                  <ul className="shadow-lg absolute right-[20px] top-[100%] z-10 mt-1 w-full rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {dropDownList.map((role, index) => (
                      <li
                        key={index}
                        className="cursor-pointer select-none p-2 text-gray-900"
                        onClick={() => {
                          setNewRole(role);
                          setDropdownOpen(false);
                        }}
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="hidden h-[0.5rem] self-stretch bg-[#F4F6F9] sm:mt-[2rem] sm:block"></div>
            <div className="mt-[1.5rem] flex w-full items-center gap-6">
              <button
                className="shadowBtn flex w-full items-center justify-center rounded-[3.6875rem] border border-b border-solid border-[#E7E7E7] bg-[#F8FAFB] py-[0.62rem] font-inter text-[1.125rem] font-semibold leading-[1.75rem] text-[#1B1B1B]"
                onClick={() => setOpen()}
              >
                Cancel
              </button>
              <button className="flex w-full items-center justify-center rounded-[3.6875rem] border border-solid border-[#CC4900] bg-[#FE6A19] py-[0.62rem] font-inter text-[1.125rem] font-semibold leading-[1.75rem] text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAdmin;
