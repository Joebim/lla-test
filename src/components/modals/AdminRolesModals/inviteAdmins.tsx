"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

import CloseImage from "../../../../public/adminRoles/close.svg";
import dropDown from "../../../../public/adminRoles/dropdown.svg";

interface InviteAdminProperties {
  setShowSuccess: (show: boolean) => void;
  setShowInviteModal: (show: boolean) => void;
  setOpen: () => void;
}

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const InviteAdminModal = ({
  setShowSuccess,
  setShowInviteModal,
  setOpen,
}: InviteAdminProperties) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dropDownOpen, setDropdownOpen] = useState(false);
  const [dropDownShow, setDropDownShow] = useState("");
  const dropDownList = ["Content Creator", "Developer"];
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (validateEmail(email) && dropDownShow !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email, dropDownShow]);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailError(validateEmail(emailValue) ? "" : "Invalid email address");
  };

  const sendInvite = () => {
    if (valid) {
      setShowSuccess(true);
      setShowInviteModal(false);
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
          </div>
          <h1 className="text-center font-axiforma text-[1.2rem] font-bold leading-[2rem] text-[#2A2A2A] sm:text-[1.75rem] sm:leading-[2.625rem]">
            Invite Admins
          </h1>
          <p className="text-center font-inter text-base font-normal leading-[1.5rem] text-[#2A425D] sm:text-[1.125rem]">
            Enter the users email address(es) and select their roles.
          </p>
          <div className="flex flex-col gap-[1.5rem] sm:gap-[2.5rem]">
            <div className="mt-[1.5rem] flex flex-col gap-[0.75rem] sm:mt-[2.5rem]">
              <label className="font-inter text-base font-normal leading-[1.5rem] text-secondary-40">
                Enter Email Address
              </label>
              <input
                className={`active:shadow-custom-purple active:border-primary-default focus-within:border-primary-default focus-within:shadow-custom-purple relative flex w-full items-center gap-[15px] rounded-[8px] border bg-white px-[16px] py-[12px] text-secondary-40 outline-none duration-100 ${emailError ? "border-red text-red" : "text-dark border-neutral-40"}`}
                type="email"
                placeholder="Omojasolaade@gmail.com"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <div className="flex flex-col gap-[0.75rem]">
              <label className="font-inter text-base font-normal leading-[1.5rem] text-secondary-40">
                Select Admin Role
              </label>
              <div className="relative">
                <div
                  className={`active:shadow-custom-purple active:border-primary-default focus-within:border-primary-default focus-within:shadow-custom-purple relative flex w-full items-center gap-[15px] rounded-[8px] border bg-white px-[16px] py-[12px] text-secondary-40 duration-100 ${emailError ? "border-red text-red" : "text-dark border-neutral-40"}`}
                >
                  {dropDownShow === "" ? "Role" : dropDownShow}
                </div>
                <Image
                  className="absolute right-[20px] top-[15px] cursor-pointer"
                  src={dropDown}
                  onClick={() => setDropdownOpen(!dropDownOpen)}
                  alt="dropdown"
                  width={20}
                  height={20}
                />
              </div>
              {dropDownOpen && (
                <div className="shadow-4xl flex w-full flex-col rounded-[10px] border border-neutral-40 bg-white p-2">
                  {dropDownList.map((dropDown, index) => (
                    <>
                      <hr />
                      <div
                        className="cursor-pointer px-2 py-2 font-inter text-[1.125rem] font-normal leading-[1.5rem] text-secondary-40 transition-all hover:bg-neutral-40"
                        key={index}
                        onClick={() => {
                          setDropDownShow(dropDown);
                          setDropdownOpen(!dropDownOpen);
                        }}
                      >
                        {dropDown}
                      </div>
                      <hr />
                    </>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={sendInvite}
              className={`flex w-full items-center justify-center rounded-[3.6875rem] border border-solid py-[0.62rem] font-inter text-[1.125rem] ${valid ? "border-[#CC4900] bg-[#FE6A19]" : "bg-[#FFBD99]"} font-semibold leading-[1.75rem] text-white`}
            >
              Send Invite
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default InviteAdminModal;
