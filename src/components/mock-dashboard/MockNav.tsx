"use client";

import Image from "next/image";

import styles from "~/components/light-navbar/LightNav.module.css";
import Logo from "~/components/light-navbar/logo-component";

const MockNav = () => {
  return (
    <>
      <nav className="mx-auto w-screen max-w-[1728px] px-0">
        <div
          className={`shadow-md md:shadow relative mx-auto hidden w-full flex-row items-center px-20 py-6 md:flex md:justify-between ${styles.navLinkGradient}`}
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

        {/* Mobile Navigation */}
        <div
          className={`shadow-sm mx-auto my-4 flex h-12 w-full items-center justify-between px-5 py-2 md:hidden ${styles.navLinkGradient}`}
        >
          <div className="flex items-center">
            <div>
              <Image
                src="/navbar/Delve-black_mobile.svg"
                alt="mobile-logo"
                width={48}
                height={48}
                className="block md:hidden"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex h-full w-full gap-4 bg-white p-1">
              <Image
                src="/navbar/profile-standin.svg"
                alt="profile-icon"
                width={48}
                height={48}
                className="rounded-full"
              />
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-40 bg-white p-[10px]">
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
    </>
  );
};

export default MockNav;
