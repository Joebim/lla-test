"use client";

import Image from "next/image";

import AdminNavDropdown from "../common/dropdowns/AdminNavDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import styles from "./AdminNav.module.css";
import Logo from "./logo-component";
import NavGradientAnimation from "./NavGradientAnimation";

const AdminNav = () => {
  return (
    <nav className="z-50 h-12 w-full font-axiforma text-black md:h-[90px] md:p-0">
      <div
        className={`shadow mx-auto flex items-center justify-between border-b border-b-neutral-40 bg-white px-[20px] lg:px-[70px] ${styles.navLinkGradient}`}
      >
        {/* Desktop Navigation */}
        <div className="hidden w-full items-center justify-between pb-[15px] pt-[19px] md:flex">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex space-x-6">
            <Image
              src="/logo/search.svg"
              alt="search-icon"
              width={32}
              height={32}
              className="cursor-pointer stroke-secondary-120"
            />

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`relative flex w-full max-w-max select-none items-center duration-300 ease-in focus:outline-none active:scale-95`}
              >
                <Image
                  src="/logo/bell.svg"
                  alt="notification-icon"
                  width={25}
                  height={25}
                  className="stroke-secondary-120"
                />
                <p className="sr-only">Notifications</p>

                <span className="absolute right-[0px] top-[4px] size-[14px] rounded-full border-[2px] border-solid border-white bg-primary-100" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="shadow-sm shadow-sm w-[350px] divide-y-[1px] divide-neutral-30 rounded-xl bg-white p-0 shadow-blue-200">
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
            <AdminNavDropdown />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between py-2 md:hidden">
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
      <NavGradientAnimation />
    </nav>
  );
};

export default AdminNav;
