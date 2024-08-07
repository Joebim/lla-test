"use client";

import Image from "next/image";

import InviteAdminModal from "~/components/modals/AdminRolesModals/inviteAdmins";
import AdminsInviteSent from "~/components/modals/AdminRolesModals/sentAdmins";
import RolesTabs from "~/components/rolesAndPermission/rolesTabs";
import add from "../../../public/adminRoles/add.svg";

interface OverviewProperties {
  title?: string;
  showInviteModal: boolean;
  setShowInviteModal: (show: boolean) => void;
  showSuccess: boolean;
  setShowSuccess: (show: boolean) => void;
  toViewNameOfRoles: boolean;
  setShowPending: (pending: boolean) => void;
  showPending: boolean;
}

const Overview = ({
  title,
  showInviteModal,
  setShowInviteModal,
  showSuccess,
  setShowSuccess,
  toViewNameOfRoles,
  setShowPending,
}: OverviewProperties) => {
  const addInvite = () => {
    setShowInviteModal(true);
  };

  return (
    <div>
      <div>
        <div>
          <div className="w-full px-4 py-8 lg:px-[2.5rem]">
            <div className="flex w-full flex-col flex-wrap justify-between gap-2 lg:flex-row lg:items-center">
              <div>
                <h1 className="font-axiforma text-[1.2rem] font-bold leading-[2rem] text-[#2A2A2A] sm:text-[1.75rem] sm:leading-[2.625rem]">
                  {toViewNameOfRoles ? `Manage ${title}` : "Roles & Permission"}
                </h1>
                <p className="text-base font-normal leading-[1.5rem] text-[#2A425D] sm:text-[1.125rem]">
                  {toViewNameOfRoles
                    ? `Manage all ${title}`
                    : "Creating and assign various roles to admins"}
                </p>
              </div>
              <div>
                <button
                  className="flex flex-row items-center gap-2 rounded-[3.6rem] border border-solid border-[#CC4900] bg-[#FE6A19] px-8 py-[12px] text-center font-axiforma text-base font-normal leading-[1.5rem] text-[#FFFFFF]"
                  onClick={addInvite}
                >
                  <Image src={add} width={18} height={18} alt="add" />
                  Add Invite
                </button>
              </div>
            </div>
            <div className="w-full">
              <RolesTabs />
            </div>
          </div>
          {showInviteModal && (
            <InviteAdminModal
              setOpen={() => setShowInviteModal(false)}
              setShowSuccess={setShowSuccess}
              setShowInviteModal={setShowInviteModal}
            />
          )}
          {showSuccess && (
            <AdminsInviteSent
              setOpen={() => setShowSuccess(false)}
              setShowPending={setShowPending}
              setShowSuccess={setShowSuccess}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
