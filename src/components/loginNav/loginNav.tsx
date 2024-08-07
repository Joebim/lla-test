"use client";

import Image from "next/image";
import Link from "next/link";

const LoginNav = () => {
  return (
    <nav className="z-50 w-full bg-neutral-10 text-black">
      <div className="md:py-24px flex h-[96px] w-full items-center justify-between px-[15px] md:px-[80px]">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src="/logo/_Logo Wrapper.svg"
              alt="desktop-logo"
              width={138}
              height={32}
              className=""
            />
          </Link>
        </div>

        <div className="hidden space-x-8 md:flex">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/_Illustrations.svg"
              alt="search-icon"
              width={22}
              height={22}
            />
            <p>Quests</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/images/_Illustrations (1).svg"
              alt="notification-icon"
              width={22}
              height={22}
            />
            <p>Progress</p>
          </div>
        </div>

        <div className="rounded-[40px]px-[10px] flex h-full w-auto items-center gap-1 space-x-[24px] py-1">
          <Image
            src="/logo/bell.svg"
            alt="profile-icon"
            width={36}
            height={36}
            className="h-[28px] w-[28px] md:h-[36px] md:w-[36px]"
          />
          <div className="flex items-center gap-x-[12px] md:gap-x-[32px]">
            <div className="flex items-center">
              <Image
                src="/images/_Flags.svg"
                alt="profile-icon"
                width={36}
                height={36}
                className="h-[28px] w-[28px] md:h-[36px] md:w-[36px]"
              />
              <Image
                src="/logo/about-down.svg"
                alt="profile-arrow"
                width={16}
                height={16}
              />
            </div>
            <div className="flex items-center">
              <Image
                src="/images/_Avatar Circle.svg"
                alt="profile-icon"
                width={36}
                height={36}
              />

              <Image
                src="/logo/about-down.svg"
                alt="profile-arrow"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[12px] w-full bg-gradient-to-r from-[#FE5900] via-[#FFA500] to-[#FE5900]"></div>
    </nav>
  );
};

export default LoginNav;
