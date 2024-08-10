"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import avatar1 from "../../../public/adminRoles/21.svg";
import avatar2 from "../../../public/adminRoles/21.svg";
import avatar3 from "../../../public/adminRoles/21.svg";
import avatar4 from "../../../public/adminRoles/21.svg";
import deleteIcon from "../../../public/adminRoles/delete.svg";
import ConfirmDeletedInvitations from "../modals/AdminRolesModals/deletedInvitation";

interface Admin {
  name: string;
  email: string;
  dateSent: string;
  role: string;
  avatar: StaticImageData;
}

interface PendingTableProperties {
  setShowDeletingInvitationModal: (value: boolean) => void;
  openDeletedModal: boolean;
  setOpenDeletedModal: (value: boolean) => void;
}

const PendingTable = ({
  setShowDeletingInvitationModal,
  openDeletedModal,
  setOpenDeletedModal,
}: PendingTableProperties) => {
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    const adminsData: Admin[] = [
      {
        name: "Afolabi Olanipekun",
        email: "AfolabiOlanipekun@gmail.com",
        dateSent: "02/07/2024",
        role: "Game Developer",
        avatar: avatar1,
      },
      {
        name: "Joseph Brendan",
        email: "josephbrendan@gmail.com",
        dateSent: "02/07/2024",
        role: "Content Creator",
        avatar: avatar2,
      },
      {
        name: "Ifunanya Adedapo",
        email: "ifunanya@gmail.com",
        dateSent: "02/07/2024",
        role: "User Manager",
        avatar: avatar3,
      },
      {
        name: "Busola Igwe",
        email: "busolaigwe@gmail.com",
        dateSent: "02/07/2024",
        role: "Super Admin",
        avatar: avatar4,
      },
    ];

    setAdmins(adminsData);
  }, []);

  const [indexPick, setIndexPick] = useState(0);

  return (
    <div className="ml-4 mt-[2.8rem] w-[100%] overflow-x-auto sm:ml-[0rem]">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-[#F8FAFB]">
              <th className="rounded-tl-[1rem] border-gray-300 px-12 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]"></th>
              <th className="border-gray-300 px-6 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]">
                Name
              </th>
              <th className="border-gray-300 px-6 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]">
                Date Sent
              </th>
              <th className="border-gray-300 px-6 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]">
                Role
              </th>
              <th className="rounded-tr-[1rem] border-gray-300 px-6 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-[#F8FAFB]"
                onClick={() => setIndexPick(index)}
              >
                <td>
                  <div className="flex items-center justify-center">
                    <RotatingLines
                      visible={true}
                      width="45"
                      strokeColor="#FEAC80"
                      strokeWidth="5"
                      animationDuration="1.5"
                      ariaLabel="rotating-lines-loading"
                    />
                  </div>
                </td>
                <td className="whitespace-no-wrap flex items-center border-gray-300 px-6 py-4">
                  <Image
                    src={admin.avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {admin.name}
                    </div>
                    <div className="text-sm text-[#525252]">{admin.email}</div>
                  </div>
                </td>
                <td className="whitespace-no-wrap border-gray-300 px-6 py-4">
                  <div className="text-sm text-[#0A0A0A]">{admin.dateSent}</div>
                </td>
                <td className="whitespace-no-wrap border-gray-300 px-6 py-4">
                  <div className="text-sm text-[#0A0A0A]">{admin.role}</div>
                </td>
                <td className="whitespace-no-wrap border-gray-300 px-6 py-4">
                  <button
                    onClick={() => setShowDeletingInvitationModal(true)}
                    className="flex items-center justify-center text-red-600 hover:text-red-800"
                  >
                    <Image
                      src={deleteIcon}
                      alt="delete"
                      width={20}
                      height={20}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openDeletedModal && (
        <ConfirmDeletedInvitations
          title={admins[indexPick].name}
          setOpen={() => setOpenDeletedModal(false)}
          setOpenDeletedModal={setOpenDeletedModal} // Pass the setOpenDeletedModal prop
        />
      )}
    </div>
  );
};

export default PendingTable;
