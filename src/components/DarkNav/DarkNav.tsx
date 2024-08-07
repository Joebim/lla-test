"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useHeroInView } from "~/hooks/util-hooks/use-hero-inview";
import { cn } from "~/lib/utils";
import { TransitionLink } from "../miscellaneous/transition-link";
import Sidebar from "../sidebar/sideBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import styles from "./DarkNav.module.css";
import Logo from "./logo-component";

const DarkNav = () => {
  const { isHeroInView } = useHeroInView();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Check if the user is signed in
    const userSignedIn = false;
    setIsSignedIn(userSignedIn);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 mx-auto w-screen max-w-[1728px] px-0">
        {isSignedIn ? (
          <div
            className={`shadow-md md:shadow mx-auto hidden w-full flex-row items-center bg-white px-20 py-6 md:flex md:justify-between ${styles.navLinkGradient}`}
          >
            <Logo />
            <>
              <div className="flex gap-9">
                <div className="flex h-full w-full items-center gap-[6px] px-[10px] py-2">
                  <Image
                    src="/navbar/Quest.svg"
                    alt="quest-icon"
                    width={22}
                    height={22}
                    className="opacity-40"
                  />
                  <p>Quests</p>
                </div>
                <div className="flex h-full w-full items-center gap-[6px] px-[10px] py-2">
                  <Image
                    src="/navbar/Progress.svg"
                    alt="progress-icon"
                    width={22}
                    height={22}
                    className="opacity-40"
                  />
                  <p>Progress</p>
                </div>
              </div>
            </>

            <>
              <div className="flex gap-4">
                <div className="flex h-full w-full items-center gap-1 py-1">
                  <Image
                    src="/logo/bell.svg"
                    alt="notification-icon"
                    width={36}
                    height={36}
                  />
                </div>
                <div className="flex h-full w-full items-center gap-1 py-1">
                  <Image
                    src="/navbar/flag-standin.svg"
                    alt="flag-icon"
                    width={36}
                    height={36}
                  />
                  <Image
                    src="/logo/about-down.svg"
                    alt="flag-arrow"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex h-full w-full items-center gap-1 py-1">
                  <Image
                    src="/navbar/profile-standin.svg"
                    alt="profile-icon"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <Image
                    src="/logo/about-down.svg"
                    alt="profile-arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </>
          </div>
        ) : (
          <div
            className={cn(
              "shadow-md md:shadow mx-auto mt-4 hidden max-w-[97%] flex-row items-center rounded-full px-20 py-4 transition-all md:flex md:justify-between md:ring-primary-20",
              isHeroInView
                ? "translate-y-0 bg-neutral-950/0 backdrop-blur-none duration-500"
                : "-translate-y-3 bg-neutral-950/80 backdrop-blur-2xl duration-1000",
            )}
          >
            <Logo />
            <div className="hidden items-center gap-5 md:flex lg:gap-7">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex flex-row items-center font-inter text-sm text-neutral-80 no-underline outline-none duration-300 ease-in`}
                >
                  <div className="flex gap-4 text-white">
                    <Image
                      src="/navbar/howitworks-dot.svg"
                      alt="mobile-logo"
                      width={8}
                      height={8}
                    />
                    How it works
                    <Image
                      src="/navbar/howitworks-dot.svg"
                      alt="mobile-logo"
                      width={8}
                      height={8}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="shadow-sm w-[200px] rounded-xl border border-blue-200 bg-white">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex space-x-6">
              <>
                <TransitionLink href="/signup" variant="secondary-two">
                  Delve In
                </TransitionLink>
              </>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        <div
          className={`shadow-sm mx-auto my-4 flex h-12 w-full items-center justify-between px-5 py-2 md:hidden ${
            isSignedIn ? styles.navLinkGradient : ""
          }`}
        >
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src="/navbar/delve-darkNav_mobileLogo.svg"
                alt="mobile-logo"
                width={48}
                height={48}
                className="block md:hidden"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <div className="flex h-full w-full gap-4 bg-white p-1">
                <Image
                  src="/navbar/profile-standin.svg"
                  alt="profile-icon"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <button
                  onClick={toggleSidebar}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-40 bg-white p-[10px]"
                >
                  <Image
                    src="/navbar/Mobile-3lines.svg"
                    alt="menu-icon"
                    width={48}
                    height={48}
                  />
                </button>
              </div>
            ) : (
              <>
                <TransitionLink href="/signup" variant="secondary-two">
                  Delve In
                </TransitionLink>
                <button
                  onClick={toggleSidebar}
                  className="h-10 w-10 rounded-[59px] border border-neutral-40 bg-white p-[10px]"
                >
                  <Image
                    src="/navbar/mobile_3lines.svg"
                    alt="menu-icon"
                    width={20}
                    height={20}
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`fixed bottom-0 left-0 top-20 z-50 flex h-screen w-full transform flex-col justify-start border-r bg-[#FDFDFD] md:w-[220px] lg:w-[252px] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {isSidebarOpen && <Sidebar />}
      </div>
    </>
  );
};

export default DarkNav;
