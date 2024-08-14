"use client";

import clsx from "clsx";
import { useState } from "react";

export default function NavTabs() {
  const [selectedTab, setSelectedTab] = useState("profile");

  return (
    <div className="h-[50px] w-full rounded-[10px] border border-neutral-40 bg-neutral-30">
      <div className="flex h-full gap-1 p-[1px]">
        <button
          onClick={() => setSelectedTab("profile")}
          className={clsx(
            "flex-1 rounded-l-[10px] px-4 py-2 text-sm font-normal text-secondary-110 transition-colors",
            "focus:outline-none",
            {
              "border-l-4 border-black bg-secondary-110 text-white":
                selectedTab === "profile",
            },
          )}
        >
          Profile
        </button>
        <button
          onClick={() => setSelectedTab("language")}
          className={clsx(
            "flex-1 border-r-2 px-4 py-2 text-sm font-normal text-secondary-110 transition-colors",
            "focus:outline-none",
            {
              "border-l-4 border-black bg-secondary-110 text-white":
                selectedTab === "language",
            },
          )}
        >
          Language
        </button>
        <button
          onClick={() => setSelectedTab("notifications")}
          className={clsx(
            "flex-1 border-r-2 px-4 py-2 text-sm font-normal text-secondary-110 transition-colors",
            "focus:outline-none",
            {
              "border-l-4 border-black bg-secondary-110 text-white":
                selectedTab === "notifications",
            },
          )}
        >
          Notifications
        </button>
        <button
          onClick={() => setSelectedTab("invitelink")}
          className={clsx(
            "flex-1 border-r-2 px-4 py-2 text-sm font-normal text-secondary-110 transition-colors",
            "text-nowrap focus:outline-none",
            {
              "text-nowrap border-l-4 border-black bg-secondary-110 text-white":
                selectedTab === "invitelink",
            },
          )}
        >
          Invite Link
        </button>
        <button
          onClick={() => setSelectedTab("security")}
          className={clsx(
            "flex-1 rounded-r-[10px] px-4 py-2 text-sm font-normal text-secondary-110 transition-colors",
            "focus:outline-none",
            { "bg-secondary-110 text-white": selectedTab === "security" },
          )}
        >
          Security
        </button>
      </div>
    </div>
  );
}
