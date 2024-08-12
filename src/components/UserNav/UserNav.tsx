"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LanguageSelector from "../common/dropdowns/LanguageSelector";
import UserNavDropdown from "../common/dropdowns/UserNavDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Logo from "./logo-component";
import styles from "./UserNav.module.css";

const UserNav = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 h-12 w-full text-black md:h-[96px] md:p-0">
      <div
        className={`shadow mx-auto flex items-center justify-between border-b border-b-neutral-40 bg-white ${styles.navLinkGradient}`}
      >
        {/* Desktop Navigation */}
        <div className="hidden w-full items-center justify-between py-4 pl-[52px] pr-20 lg:flex">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex space-x-3 lg:space-x-9">
            <Link
              href="/dashboard/user/quests"
              className={`group flex w-[124px] items-center justify-center gap-[6px] rounded-[40px] px-2 py-3 text-secondary-100 duration-200 active:scale-95 ${
                isActive("/dashboard/user/quests")
                  ? "bg-secondary-120 text-white"
                  : ""
              }`}
            >
              <Image
                src="/navbar/quest-icon.svg"
                alt="quest-icon-active"
                width={22}
                height={22}
                className={`${
                  isActive("/dashboard/user/quests") ? "block" : "hidden"
                }`}
              />
              <Image
                src="/navbar/quest-icon-light.svg"
                alt="quest-icon-inactive"
                width={22}
                height={22}
                className={`${
                  isActive("/dashboard/user/quests") ? "hidden" : "block"
                }`}
              />
              Quests
            </Link>

            <Link
              href="/dashboard/user/progress"
              className={`group flex w-[124px] items-center justify-center gap-[6px] rounded-[40px] px-2 py-3 text-secondary-100 duration-200 active:scale-95 ${
                isActive("/dashboard/user/progress")
                  ? "bg-secondary-120 text-white"
                  : ""
              }`}
            >
              <Image
                src="/navbar/progress-icon.svg"
                alt="progress-icon-active"
                width={22}
                height={22}
                className={`${
                  isActive("/dashboard/user/progress") ? "block" : "hidden"
                }`}
              />
              <Image
                src="/navbar/progress-icon-light.svg"
                alt="progress-icon-inactive"
                width={22}
                height={22}
                className={`${
                  isActive("/dashboard/user/progress") ? "hidden" : "block"
                }`}
              />
              Progress
            </Link>
          </div>

          <div className="flex space-x-8">
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
                          className=""
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

            <LanguageSelector />

            <UserNavDropdown />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between px-5 py-2 lg:hidden">
          <div className="flex items-center">
            <Image
              src="/navbar/Delve-black_mobile.svg"
              alt="mobile-logo"
              width={48}
              height={48}
              className="block lg:hidden"
            />
          </div>

          <div className="flex items-center space-x-4">
            <UserNavDropdown />
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
