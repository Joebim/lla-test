"use client";

import { LayoutList, Lock, ShieldCheck, User } from "lucide-react";
import { ReactNode, useState } from "react";

import AdminProfile from "~/components/profileSettings/page";

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
    icon: <User className="text-[10px]" />,
  },
  {
    label: "Password & Security",
    children: <>Nothing yet!</>,
    title: "Password & Security",
    subDescription: "Change password",
    icon: <Lock className="text-[14px]" />,
  },
  {
    label: "Preferences",
    children: <>Nothing yet!</>,
    title: "Preferences",
    subDescription: "Set your notification and preferences",
    icon: <LayoutList className="text-[14px]" />,
  },
  {
    label: "Roles & Permission",
    children: <>Nothing yet!</>,
    title: "Preferences",
    subDescription: "Creating and assign various roles to admins",
    icon: <ShieldCheck className="text-[14px]" />,
  },
];

const ProfileSettingsTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      <div>
        <h2 className="m-0 text-[15px] font-bold text-neutral-150 md:text-[19px]">
          {tabs[activeTab].title}
        </h2>
        <p className="text-[13px] text-secondary-60 md:text-[14px]">
          {tabs[activeTab].subDescription}
        </p>
      </div>
      <section className="mt-[25px] flex w-full items-center justify-between border-b border-t py-[10px] pr-[5%]">
        {tabs.map((tab, index: number) => (
          <button
            key={index}
            className={
              activeTab === index
                ? "flex items-center gap-1 border-b-2 border-b-primary-60 py-[4px] text-primary-60"
                : "flex items-center gap-1 py-[4px] text-secondary-60"
            }
            onClick={() => setActiveTab(index)}
          >
            <p className="text-[10px]">{tab.icon}</p>
            <p className="hidden md:block">{tab.label}</p>
          </button>
        ))}
      </section>
      <div>{tabs[activeTab].children}</div>
    </main>
  );
};

export default ProfileSettingsTab;
