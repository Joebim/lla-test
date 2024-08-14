"use client";

import { LayoutList, Lock, ShieldCheck, User } from "lucide-react";
import { ReactNode, useState } from "react";

import AdminPreferenceSettings from "~/components/admin-settings/preference-settings/page";
import AdminProfile from "~/components/admin-settings/profileSettings/page";
import RolesAndPermission from "../admin-settings/roles/overview/rolesAndPermission/page";
import SecurityCard from "../Password&Security/SecurityCard";

interface TabProperties {
  label: string;
  icon: ReactNode;
  title: string;
  subDescription: string;
  children: ReactNode;
}

const tabs: TabProperties[] = [
  {
    label: "Profile",
    children: <AdminProfile />,
    title: "Profile Settings",
    subDescription: "Edit profile",
    icon: <User className="h-5 w-5" />,
  },
  {
    label: "Password & Security",
    children: <SecurityCard />,
    title: "Password & Security",
    subDescription: "Change password",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    label: "Preferences",
    children: <AdminPreferenceSettings />,
    title: "Preferences",
    subDescription: "Set your notification and preferences",
    icon: <LayoutList className="h-5 w-5" />,
  },
  {
    label: "Roles & Permission",
    children: <RolesAndPermission />,
    title: "Roles & Permissions",
    subDescription: "Creating and assign various roles to admins",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const AdminSettingsTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="mx-auto max-w-[1728px] lg:px-[70px]">
      <div className="mt-6 sm:mt-4">
        <h2 className="m-0 text-[15px] font-bold text-neutral-150 md:text-[19px]">
          {tabs[activeTab].title}
        </h2>
        <p className="text-[13px] text-secondary-60 md:text-[14px]">
          {tabs[activeTab].subDescription}
        </p>
      </div>

      <section className="mt-[25px] flex w-full items-center justify-between border-b border-t py-[10px]">
        {tabs.map((tab, index: number) => (
          <button
            key={index}
            className={`flex items-center justify-center gap-2 px-2 py-[4px] transition-colors duration-200 ${
              activeTab === index
                ? "border-b-2 border-b-primary-60 text-primary-60"
                : "text-secondary-60 hover:bg-gray-100"
            } md:px-4`}
            onClick={() => setActiveTab(index)}
          >
            <span className="md:text-[14px]">{tab.icon}</span>
            <span className="hidden text-sm md:inline">{tab.label}</span>
          </button>
        ))}
      </section>
      <div>{tabs[activeTab].children}</div>
    </main>
  );
};

export default AdminSettingsTab;
