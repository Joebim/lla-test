"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";

import achievements from "../../../public/userSidebarNav/achievements.png";
import challenges from "../../../public/userSidebarNav/challenges.png";
import leaderboards from "../../../public/userSidebarNav/leaderboard.png";
import learningRoom from "../../../public/userSidebarNav/learningRoom.png";
import logout from "../../../public/userSidebarNav/logout.png";
import progress from "../../../public/userSidebarNav/progress.png";

const sideItems = [
  {
    route: "Learning Room",
    link: "/learningRoom",
    icon: learningRoom,
    id: "Learning",
  },
  {
    route: "Progress Tracking",
    link: "/progress",
    icon: progress,
    id: "Progress",
  },
  {
    route: "Achievements",
    link: "/achievements",
    icon: achievements,
    id: "Achievements",
  },
  {
    route: "Leaderboards",
    link: "/leaderboard",
    icon: leaderboards,
    id: "Leaderboards",
  },
  {
    route: "Challenges",
    link: "/challenges",
    icon: challenges,
    id: "Challenges",
  },
];

interface Iproperties {
  sideNavitems?: {
    route: string;
    link: string;
    icon: StaticImageData; // Correct type here
    id: string;
  }[];
  currenPathName?: string;
}

const Sidebar: FC<Iproperties> = ({ sideNavitems = sideItems }) => {
  const pathname = usePathname();
  const currentPath = pathname?.split("/")[3];
  const [clickedLink, setClickedLink] = useState<string | undefined>();

  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 flex h-screen w-full flex-col justify-start border-r bg-[#FDFDFD] md:block md:w-[220px] md:items-center lg:w-[252px]">
      <div className="h-full w-[100%] flex-col justify-between md:flex">
        <section className="mx-auto flex flex-col items-center justify-center gap-y-3 pt-6 text-[14px] md:items-stretch md:px-4">
          {sideNavitems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              data-testid={item.id}
              role="sidebar-link"
              onClick={() => setClickedLink(item.id)}
              className={`${
                clickedLink === item.id
                  ? "rounded-[12px] bg-[#FE8B4C] text-white"
                  : currentPath === item.id
                    ? "bg-Primary/90 rounded-[12px] text-white"
                    : "text-neutral-dark-2 bg-transparent hover:bg-gray-200"
              } flex h-[52px] w-[233px] items-center justify-center gap-2.5 px-2.5 py-3 text-sm transition-all duration-300 ease-in md:h-auto md:w-auto md:justify-start md:rounded-xl`}
            >
              <Image
                src={item.icon}
                alt={`${item.route} icon`}
                className="h-5 w-5"
                role="sidebar-icon"
                width={28}
                height={28}
              />
              <span className="block">{item.route}</span>
            </Link>
          ))}
        </section>
        <div className="flex h-[100px] w-full items-center justify-center border-t-4 border-[#FFDECC] text-[14px] text-[#FF1925]">
          <div className="mx-auto flex h-[52px] items-center gap-[10px] rounded-xl px-[32px] hover:bg-gray-200">
            <div>
              <Image src={logout} alt="logout-icon" width={28} height={28} />
            </div>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
