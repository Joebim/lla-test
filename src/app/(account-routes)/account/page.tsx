"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Account = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!children) {
      router.push("/notification");
    }
  }, [children, router]);

  return (
    <div className="flex min-h-screen w-full justify-center bg-neutral-10 px-[20px] md:px-[30px] lg:px-[160px]">
      <div className="w-[1311px] md:px-[24px] md:py-[52px]">
        <div className="rounded-[10px] border-neutral-40 bg-white px-[24px] py-[26px]">
          <p className="text-[32px]">Account Settings</p>
        </div>
        <div className="mt-[36px] flex flex-col gap-[40px] md:flex-row">
          <ul className="flex h-[396px] flex-col gap-[12px] rounded-[18px] bg-[#FFFFFF] p-[12px]">
            <li className="flex items-center gap-x-[12px] rounded-[18px] px-[20px] py-[12px]">
              <Image
                src={"/images/_profile.svg"}
                alt="profile"
                width={28}
                height={28}
              />
              Profile
            </li>
            <Link href={"/audio"}>
              <li
                className={`flex items-center gap-x-[12px] rounded-[18px] px-[20px] py-[12px] ${
                  pathname === "/audio" ? "border border-secondary-120" : ""
                }`}
              >
                <Image
                  src={"/images/_Audio.svg"}
                  alt="profile"
                  width={28}
                  height={28}
                />
                Audio
              </li>
            </Link>
            <li className="flex items-center gap-x-[12px] rounded-[18px] px-[20px] py-[12px]">
              <Image
                src={"/images/_Language.svg"}
                alt="profile"
                width={28}
                height={28}
              />
              Language
            </li>
            <Link href={"/notification"}>
              <li
                className={`flex items-center gap-x-[12px] rounded-[18px] px-[20px] py-[12px] ${
                  pathname === "/notification"
                    ? "border border-secondary-120"
                    : ""
                }`}
              >
                <Image
                  src={"/images/_notification.svg"}
                  alt="profile"
                  width={28}
                  height={28}
                />
                Notifications
              </li>
            </Link>
            <li className="flex items-center gap-x-[12px] rounded-[18px] px-[20px] py-[12px]">
              <Image
                src={"/images/_security.svg"}
                alt="profile"
                width={28}
                height={28}
              />
              Security
            </li>
            <li className="flex items-center gap-x-[12px] rounded-[18px] px-[20px] py-[12px]">
              <Image
                src={"/images/_security.svg"}
                alt="profile"
                width={28}
                height={28}
              />
              Support
            </li>
          </ul>
          <div className="flex grow flex-col gap-[48px] rounded-[18px] bg-[#]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
