"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

import CloseImage from "../../../../public/adminRoles/close.svg";

interface EditAdminTitleAndDescriptionProperties {
  setOpen: () => void;
  title: string;
  description: string;
  onSave: (title: string, description: string) => void;
}

const EditAdminTitleAndDescription = ({
  setOpen,
  title,
  description,
  onSave,
}: EditAdminTitleAndDescriptionProperties) => {
  const [valid, setValid] = useState(false);
  const [theTitle, setTitle] = useState(title);
  const [theDescription, setDescription] = useState(description);

  useEffect(() => {
    if (theTitle !== "" && theDescription !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [theTitle, theDescription]);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    if (valid) {
      onSave(theTitle, theDescription);
    }
  };

  return (
    <div className="">
      <div
        className="fixed inset-0 flex items-center justify-center bg-black opacity-[50%] backdrop-blur-sm"
        onClick={setOpen}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className={`shadow-4xl relative max-w-[44.1875rem] rounded-[1rem] bg-white px-[1.2rem] py-4 sm:px-[2.25rem] sm:py-8`}
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
            {" "}
            <h1 className="text-center font-axiforma text-[1.2rem] font-bold leading-[2rem] text-[#2A2A2A] sm:text-[1.75rem] sm:leading-[2.625rem]">
              Edit Admin Title & Description
            </h1>
            <p className="text-center font-inter text-base font-normal leading-[1.5rem] text-[#2A425D] sm:text-[1.125rem]">
              Edit Admin Title and Description here
            </p>
            <div className="flex flex-col gap-[1.5rem] sm:gap-[2rem]">
              <div className="mt-[1.5rem] flex flex-col gap-[0.75rem]">
                <label className="font-inter text-base font-normal leading-[1.5rem] text-secondary-40">
                  Title
                </label>
                <input
                  className={`active:shadow-custom-purple active:border-primary-default focus-within:border-primary-default focus-within:shadow-custom-purple relative flex w-full items-center gap-[15px] rounded-[8px] border bg-white px-[1.5rem] py-[12px] text-secondary-40 outline-none duration-100 placeholder:text-secondary-40`}
                  type="text"
                  placeholder="Enter Admin Title"
                  value={theTitle}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="flex flex-col gap-[0.75rem]">
                <label className="font-inter text-base font-normal leading-[1.5rem] text-secondary-40">
                  Description
                </label>
                <textarea
                  className={`active:shadow-custom-purple active:border-primary-default focus-within:border-primary-default focus-within:shadow-custom-purple relative flex h-[14.25rem] w-full resize-none items-center gap-[15px] rounded-[8px] border bg-white px-[16px] py-[12px] text-secondary-40 outline-none duration-100 placeholder:text-secondary-40`}
                  placeholder="Write Admin Brief/Description"
                  value={theDescription}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="hidden h-[0.5rem] w-full self-stretch bg-[#F4F6F9] sm:mt-[2rem] sm:block"></div>

              <button
                onClick={handleSave}
                className={`rounded-[3.6rem] py-[12px] text-center font-inter text-base font-normal leading-[1.5rem] ${
                  valid
                    ? "border border-solid border-[#CC4900] bg-[#FE6A19] text-[#FFFFFF]"
                    : "bg-gray-200 text-gray-500"
                }`}
                disabled={!valid}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAdminTitleAndDescription;
