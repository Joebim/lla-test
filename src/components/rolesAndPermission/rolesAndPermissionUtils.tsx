"use client";

import Image from "next/image";
import { useState } from "react";

import avatar from "../../../public/adminRoles/_Avatars.svg";
import edit from "../../../public/adminRoles/edit.svg";
import people from "../../../public/adminRoles/people.svg";
import user from "../../../public/adminRoles/user.svg";
import view from "../../../public/adminRoles/view.svg";
import EditAdminTitleAndDescription from "../modals/AdminRolesModals/editAdminTitleAndDescription";

export const rolesData = [
  {
    title: "Super Admin ",
    description:
      "The Super Admin has full access to all features and settings, including managing other admins and assigning roles. They can access and edit all user data and content, generate and view all reports and analytics, configure system settings and integrations, and oversee system maintenance and performance monitoring.",
    adminProfiles: avatar,
    icon: user,
  },
  {
    title: "Content Creator ",
    description:
      "Content Creators have access to create, edit, and delete lessons and exercises, manage multimedia content, set up and modify learning paths, and ensure content accuracy through quality assurance. They collaborate with other team members to enhance lesson quality and integrate feedback.",
    adminProfiles: avatar,
    icon: people,
  },
  {
    title: "Game Developer ",
    description:
      "Game Developers have access to develop new interactive language learning games, design game mechanics and storylines, and manage game content and use analytics to understand user engagement and improve the games based on feedback. Both roles ensure a seamless and engaging learning experience.",
    adminProfiles: avatar,
    icon: people,
  },
  {
    title: "User Manager ",
    description:
      "User Managers have the authority to oversee user interactions and experiences on our platform such as Manage the onboarding process, Handle user accounts, including profile updates, Monitor user behavior and engagement metrics to improve overall user satisfaction.",
    adminProfiles: avatar,
    icon: people,
  },
];

interface RolesAndPermissionUtilsProperties_ {
  setToViewNameOfRules: (value: boolean) => void;
  setViewTitle: (title: string) => void;
}

const RolesAndPermissionUtils = ({
  setToViewNameOfRules,
  setViewTitle,
}: RolesAndPermissionUtilsProperties_) => {
  const [indexPick, setIndexPick] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);
  const [roles, setRoles] = useState(rolesData);

  const EditButton = (index: number) => {
    setIndexPick(index);
    setShowEditModal(true);
  };

  const saveChanges = (title: string, description: string) => {
    const updatedRolesData = [...rolesData];
    updatedRolesData[indexPick] = {
      ...updatedRolesData[indexPick],
      title,
      description,
    };
    setRoles(updatedRolesData);
    setShowEditModal(false);
  };

  return (
    <>
      <div className="ml-4 mt-[2.8rem] flex w-[100%] flex-col items-center rounded-[0.625rem] border border-solid border-[#E9EEF3] bg-[#fff] sm:ml-[0rem]">
        <div className="mx-auto grid max-w-[63.9375rem] grid-cols-1 gap-6 px-4 py-[3rem] lg:grid-cols-2">
          {roles.map((role, index) => (
            <div key={index}>
              <div className="shadow-sm rounded-[0.75rem] border-2 border-[#D0D0D0] bg-white px-4 py-[1.25rem]">
                <div className="mb-4 flex w-fit items-start rounded-[5.15625rem] bg-[#FFE5CC] p-2">
                  <Image
                    className=""
                    src={role.icon}
                    alt={`${role.title} icon`}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-base font-semibold text-[#2A2A2A]">
                  {role.title}
                </h3>

                <p className="mb-4 line-clamp-3 overflow-hidden text-ellipsis text-[0.875rem] text-[#717171]">
                  {role.description}
                </p>
                <div className="mb-4 flex items-center">
                  <Image
                    src={role.adminProfiles}
                    alt="Admin profiles"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => EditButton(index)}
                    className="flex items-center rounded-[0.325rem] border border-[#D0D0D0] px-2 py-0 text-[#717171] hover:bg-gray-100 sm:px-4 sm:py-2"
                  >
                    <Image src={edit} alt="Edit icon" width={16} height={16} />
                    <span className="ml-2">Edit</span>
                  </button>
                  <button
                    onClick={() => {
                      setToViewNameOfRules(true);
                      setViewTitle(role.title);
                    }}
                    className="flex items-center rounded-[0.325rem] border border-[#D0D0D0] px-2 py-0 text-[#717171] hover:bg-gray-100 sm:px-4 sm:py-2"
                  >
                    <Image src={view} alt="View icon" width={16} height={16} />
                    <span className="ml-2">View</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showEditModal && (
        <EditAdminTitleAndDescription
          setOpen={() => setShowEditModal(false)}
          title={roles[indexPick].title}
          description={roles[indexPick].description}
          onSave={saveChanges}
        />
      )}
    </>
  );
};

export default RolesAndPermissionUtils;
