"use client";

import clsx from "clsx";
import { Lock, Settings, Shield, User } from "lucide-react";
import Link from "next/link";

const RolesTabs = () => {
  const menuItems = [
    { title: "Profile", path: "/roles/overview/profile", icon: User },
    {
      title: "Password & Security",
      path: "/roles/overview/passwordAndSecurity",
      icon: Lock,
    },
    { title: "Preference", path: "/roles/overview/preference", icon: Settings },
    {
      title: "Roles & Permission",
      path: "/roles/overview/rolesAndPermission",
      icon: Shield,
    },
  ];

  return (
    <nav className="mt-[2.4rem] flex w-full flex-wrap overflow-hidden rounded-[0.625rem] bg-white sm:border md:w-fit">
      {menuItems.map((item) => (
        <Link href={item.path} key={item.title}>
          <p
            className={clsx(
              "flex items-center gap-3 border-r border-solid border-[#E9EEF3] px-2 py-2 font-axiforma text-[#1B1B1B] transition-all hover:bg-[#FFDECC] hover:text-[#FE5900] sm:px-4 sm:py-4",
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[0.875rem]">{item.title}</span>
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default RolesTabs;
