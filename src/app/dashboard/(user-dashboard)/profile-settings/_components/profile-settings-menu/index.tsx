"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/dashboard/profile-settings/profile",
    src: "/images/_profile.svg",
    alt: "profile",
    label: "Profile",
  },
  {
    href: "/dashboard/profile-settings/audio",
    src: "/images/_Audio.svg",
    alt: "audio",
    label: "Audio",
  },
  {
    href: "/dashboard/profile-settings/language",
    src: "/images/_Language.svg",
    alt: "language",
    label: "Language",
  },
  {
    href: "/dashboard/profile-settings/notifications",
    src: "/images/_notification.svg",
    alt: "notifications",
    label: "Notifications",
  },
  {
    href: "/dashboard/profile-settings/security",
    src: "/images/_security.svg",
    alt: "security",
    label: "Security",
  },
  {
    href: "/dashboard/profile-settings/support",
    src: "/images/_security.svg",
    alt: "support",
    label: "Support",
  },
];

const ProfileSettingsMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="flex h-fit w-full max-w-[240px] flex-col gap-[12px] rounded-[18px] border bg-[#FFFFFF] p-[12px]">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <li
            className={`flex w-full items-center gap-x-[12px] rounded-[14px] px-[20px] py-[12px] ${
              pathname === link.href ? "border border-secondary-120" : ""
            }`}
          >
            <Image src={link.src} alt={link.alt} width={28} height={28} />
            {link.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ProfileSettingsMenu;
