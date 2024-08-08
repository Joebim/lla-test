"use client";

import Image from "next/image";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import progress from "../../../../public/dashboard/progress.png";
import quest from "../../../../public/dashboard/quest.png";
import styles from "./AdminNav.module.css";
import Logo from "./logo-component";

const UserNav = () => {
  const [activeLink, setActiveLink] = useState<string | undefined>();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="z-50 h-12 w-full text-black md:h-[96px] md:p-0">
      <div
        className={`shadow mx-auto flex items-center justify-between border-b border-b-neutral-40 bg-white ${styles.navLinkGradient}`}
      >
        {/* Desktop Navigation */}
        <div className="hidden w-full items-center justify-between py-4 pl-[52px] pr-20 md:flex">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Middle Content */}
          <div className="flex items-center space-x-8">
            <a
              href="/dashboard/quests"
              onClick={() => handleLinkClick("quests")}
              className={`flex gap-2 text-sm font-medium ${
                activeLink === "quests"
                  ? "rounded-full bg-black p-3 text-white"
                  : "text-black"
              }`}
            >
              <Image src={quest} alt="quest-icon" width={10} height={10} />
              Quests
            </a>
            <a
              href="/dashboard/progress"
              onClick={() => handleLinkClick("progress")}
              className={`flex gap-2 text-sm font-medium ${
                activeLink === "progress"
                  ? "rounded-full bg-black p-3 text-white"
                  : "text-black"
              }`}
            >
              <Image
                src={progress}
                alt="progress-icon"
                width={10}
                height={10}
              />
              Progress
            </a>
          </div>

          <div className="flex space-x-8">
            <Image
              src="/logo/search.svg"
              alt="search-icon"
              width={48}
              height={48}
            />

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`relative flex w-full max-w-max select-none items-center duration-300 ease-in focus:outline-none active:scale-95`}
              >
                <Image
                  src="/logo/bell.svg"
                  alt="notification-icon"
                  width={38}
                  height={38}
                />
                <p className="sr-only">Notifications</p>

                <span className="absolute right-[7px] top-[1px] size-[12px] rounded-full bg-primary-100 stroke-white stroke-[1px]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="shadow-sm shadow-sm w-[400px] divide-y-[1px] divide-neutral-30 rounded-xl bg-white p-0 shadow-blue-200">
                <DropdownMenuLabel className="flex items-center justify-between gap-8 bg-secondary-110 px-6 py-5">
                  <p className="text-lg font-medium text-white">
                    Notifications
                  </p>
                  <button
                    type="button"
                    className="text-sm text-primary-100 duration-200 hover:underline active:scale-95"
                  >
                    View All
                  </button>
                </DropdownMenuLabel>

                <DropdownMenuItem className="flex items-center justify-between gap-5 p-4 text-secondary-120 duration-150 hover:cursor-pointer hover:bg-neutral-10">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="flex size-8 items-center justify-center rounded-full border border-neutral-40">
                        <Image
                          src="/logo/notification-badge.svg"
                          alt="notification-icon"
                          width={16}
                          height={16}
                        />
                      </span>
                    </div>
                    <h4 className="text-sm">
                      You have gained a new badge{" "}
                      <span className="font-medium">“Ultimate Player”</span> for
                      beating record time consistently.
                    </h4>
                  </div>
                  <p className="min-w-max text-xs text-secondary-80">July 20</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between gap-5 p-4 text-secondary-120 duration-150 hover:cursor-pointer hover:bg-neutral-10">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="flex size-8 items-center justify-center rounded-full border border-neutral-40">
                        <Image
                          src="/logo/notification-checkmark.svg"
                          alt="notification-icon"
                          width={16}
                          height={16}
                        />
                      </span>
                    </div>
                    <h4 className="text-sm">
                      You have beat your record! Great job!
                    </h4>
                  </div>

                  <p className="min-w-max text-xs text-secondary-80">July 19</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between gap-5 p-4 text-secondary-120 duration-150 hover:cursor-pointer hover:bg-neutral-10">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="flex size-8 items-center justify-center rounded-full border border-neutral-40">
                        <Image
                          src="/logo/notification-diamond.svg"
                          alt="notification-icon"
                          width={16}
                          height={16}
                        />
                      </span>
                    </div>
                    <h4 className="text-sm">
                      You are now{" "}
                      <span className="font-medium">Player #45</span> on the
                      leaderboard. Keep going!
                    </h4>
                  </div>

                  <p className="min-w-max text-xs text-secondary-80">July 18</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between gap-5 p-4 text-secondary-120 duration-150 hover:cursor-pointer hover:bg-neutral-10">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="flex size-8 items-center justify-center rounded-full border border-neutral-40">
                        <Image
                          src="/logo/notification-checkmark.svg"
                          alt="notification-icon"
                          width={16}
                          height={16}
                        />
                      </span>
                    </div>
                    <h4 className="text-sm">
                      Your email has been successfully verified
                    </h4>
                  </div>

                  <p className="min-w-max text-xs text-secondary-80">July 17</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex h-11 w-full items-center gap-1 rounded-[40px] border-2 border-[#E9EEF3] px-[9px]">
              <Image
                src="/navbar/profile-standin.svg"
                alt="profile-icon"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-secondary-120">
                  John Doe
                </p>
                <p className="text-sm font-normal text-secondary-70">
                  Super Admin
                </p>
              </div>
              <Image
                src="/logo/about-down.svg"
                alt="profile-arrow"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between py-1 md:hidden">
          <div className="flex items-center">
            <Image
              src="/navbar/Delve-black_mobile.svg"
              alt="mobile-logo"
              width={48}
              height={48}
              className="block md:hidden"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/navbar/profile-standin.svg"
              alt="profile-icon"
              width={48}
              height={48}
              className="rounded-full"
            />
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-40 bg-white p-[10px]">
              <p className="sr-only">Menu</p>
              <Image
                src="/navbar/Mobile-3lines.svg"
                alt="menu-icon"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
