import Image from "next/image";
import { useState } from "react";

import avatar1 from "../../../public/adminRoles/21.svg";
import threeDots from "../../../public/adminRoles/threeDots.svg";
import DeleteAdmin from "../modals/AdminRolesModals/deleteAdmin";
import EditAdmin from "../modals/AdminRolesModals/editAdminRole";

interface Admin {
  name: string;
  email: string;
  status: string;
  role: string;
  dateSent: string;
}

const RoleTable = () => {
  //   const handleDelete = (email: string) => {
  //     console.log(`Delete ${email}`);
  //   };

  //   const handleEditRole = (email: string) => {
  //     console.log(`Edit role of ${email}`);
  //   };
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [showOptions, setShowOptions] = useState<string | null>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>();

  const handleDeleteClick = (admin: Admin) => {
    setSelectedAdmin(admin);
    setShowDeleteModal(true);
  };

  const handleEditClick = (admin: Admin) => {
    setSelectedAdmin(admin);
    setShowEditModal(true);
  };
  const handleOptionsClick = (email: string) => {
    setShowOptions((previous) => (previous === email ? undefined : email));
  };

  const data = [
    {
      name: "Abiola Olanibikun",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Accepted",
      email: "abiola@olanibikun.com",
      img: avatar1,
    },
    {
      name: "Joseph Brendan",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Accepted",
      email: "joseph@brendan.com",
      img: avatar1,
    },
    {
      name: "Funanya Adekpo",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Pending",
      email: "funanya@adekpo.com",
      img: avatar1,
    },
    {
      name: "Busola Igwe",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Pending",
      email: "busola@igwe.com",
      img: avatar1,
    },
    {
      name: "Jack Johnson",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Pending",
      email: "jack@johnson.com",
      img: avatar1,
    },
    {
      name: "Joseph Brendan",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Pending",
      email: "joseph@brendan.com",
      img: avatar1,
    },
    {
      name: "Busola Igwe",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Pending",
      email: "busola@igwe.com",
      img: avatar1,
    },
    {
      name: "Jack Johnson",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Pending",
      email: "jack@johnson.com",
      img: avatar1,
    },
    {
      name: "Joseph Brendan",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Pending",
      email: "joseph@brendan.com",
      img: avatar1,
    },
    {
      name: "Jack Johnson",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Pending",
      email: "jack@johnson.com",
      img: avatar1,
    },
    {
      name: "Joseph Brendan",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Accepted",
      email: "joseph@brendan.com",
      img: avatar1,
    },
    {
      name: "Jack Johnson",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Pending",
      email: "jack@johnson.com",
      img: avatar1,
    },
    {
      name: "Joseph Brendan",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Accepted",
      email: "joseph@brendan.com",
      img: avatar1,
    },
    {
      name: "Abiola Olanibikun",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Accepted",
      email: "abiola@olanibikun.com",
      img: avatar1,
    },
    {
      name: "Joseph Brendan",
      dateSent: "02/07/2024",
      role: "Super Admin",
      status: "Accepted",
      email: "joseph@brendan.com",
      img: avatar1,
    },
    // Add more data as needed
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const renderTableRows = currentRows.map((row, index) => (
    <tr key={index} className="cursor-pointer hover:bg-[#F8FAFB]">
      <td className="whitespace-no-wrap flex items-center border-gray-300 px-6 py-4">
        <Image
          src={row.img}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{row.name}</div>
          <div className="text-sm text-[#525252]">{row.email}</div>
        </div>
      </td>
      <td className="whitespace-no-wrap border-gray-300 px-6 py-4">
        <div className="text-sm text-[#0A0A0A]">{row.dateSent}</div>
      </td>
      <td className="whitespace-no-wrap border-gray-300 px-6 py-4">
        <div className="text-sm text-[#0A0A0A]">{row.role}</div>
      </td>
      <td className="py-2">
        <div className="flex items-center gap-2">
          <div
            className={`h-[0.75rem] w-[0.75rem] rounded-[100%] ${row?.status === "Accepted" ? "bg-[#6DC347]" : "bg-[#F97316]"} `}
          ></div>

          <span
            className={
              row.status === "Accepted" ? "text-green-600" : "text-orange-600"
            }
          >
            {row.status}
          </span>
        </div>
      </td>
      <td className="whitespace-no-wrap relative border-gray-300 px-6 py-4">
        <button
          onClick={() => handleOptionsClick(row.email)}
          className="flex items-center justify-center text-red-600 hover:text-red-800"
        >
          <Image src={threeDots} alt="options" width={20} height={20} />
        </button>
        {showOptions === row.email && (
          <div className="absolute right-[25%] top-[8%] h-[4.5rem] w-fit rounded-[0.375rem] border border-solid border-[#E9EEF3] bg-white p-2 pr-[1.5rem] text-[0.875rem] font-normal text-[#09090B]">
            <p className="pb-2" onClick={() => handleDeleteClick(row)}>
              Delete
            </p>
            <hr />
            <p className="pt-2" onClick={() => handleEditClick(row)}>
              Edit
            </p>
          </div>
        )}
      </td>
    </tr>
  ));

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let index = 1; index <= totalPages; index++) {
      pageNumbers.push(
        <button
          key={index}
          onClick={() => setCurrentPage(index)}
          className={`mx-1 rounded-[0.375rem] border border-solid bg-[#fff] px-3 py-1 ${currentPage === index ? "border-[#E4E4E7]" : "border-none"}`}
        >
          {index}
        </button>,
      );
    }
    return pageNumbers;
  };

  return (
    <div className="my-6 ml-4 mt-[2.8rem] w-[90%] sm:ml-[2.5rem]">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-[#F8FAFB]">
              <th className="rounded-tl-[1rem] border-gray-300 px-6 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]">
                Name
              </th>
              <th className="border-gray-300 px-6 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]">
                Date Sent
              </th>
              <th className="border-gray-300 px-6 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]">
                Role
              </th>
              <th className="border-gray-300 px-6 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]">
                Status
              </th>
              <th className="rounded-tr-[1rem] border-gray-300 px-6 py-4 text-left font-inter text-base font-semibold leading-[normal] tracking-wider text-[#0A0A0A]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{renderTableRows}</tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center gap-3">
        {currentPage > 1 && (
          <div
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 text-[1.25rem] font-semibold leading-normal text-[#09090B]"
          >
            Previous
          </div>
        )}

        <div className="flex items-center">{renderPageNumbers()}</div>
        {showDeleteModal && selectedAdmin && (
          <DeleteAdmin
            setOpen={() => setShowDeleteModal(false)}
            admin={selectedAdmin}
          />
        )}
        {showEditModal && selectedAdmin && (
          <EditAdmin
            setOpen={() => setShowEditModal(false)}
            admin={selectedAdmin}
          />
        )}
        {currentPage !== totalPages && (
          <div
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 text-[1.25rem] font-semibold leading-normal text-[#09090B]"
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleTable;
