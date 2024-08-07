"use client";

import Image from "next/image";

import success from "../../../../public/adminRoles/success.svg";
import ContainerModal from "./parentAdminModal";

interface AdminsInviteSentProperties {
  setOpen: () => void;
  setShowPending: (value: boolean) => void;
  setShowSuccess: (value: boolean) => void;
}

const AdminsInviteSent = ({
  setOpen,
  setShowPending,
  setShowSuccess,
}: AdminsInviteSentProperties) => {
  const invitationButton = () => {
    setShowPending(true);
    setShowSuccess(false);
    setOpen();
  };

  return (
    <ContainerModal width="max-w-[30.5rem]" onClose={setOpen}>
      <div className="flex flex-col items-center justify-center">
        <Image
          className="mt-[1rem]"
          src={success}
          alt="success"
          width={80}
          height={80}
        />
        <h1 className="text-center font-axiforma text-[1.2rem] font-bold leading-[2rem] text-[#2A2A2A] sm:text-[1.75rem] sm:leading-[2.625rem]">
          Invite Admins
        </h1>
        <p className="text-center font-inter text-base font-normal leading-[1.5rem] text-[#2A425D] sm:mt-[1.5rem] sm:w-[80%] sm:text-[1.125rem]">
          Your invitations have been successfully sent to the email addresses
          you provided
        </p>
        <button
          onClick={invitationButton}
          className={`mt-[1.5rem] flex w-full items-center justify-center rounded-[3.6875rem] border border-solid border-[#CC4900] bg-[#FE6A19] py-[0.62rem] font-inter text-[1.125rem] font-semibold leading-[1.75rem] text-white`}
        >
          View Pending Invitations
        </button>
      </div>
    </ContainerModal>
  );
};

export default AdminsInviteSent;
