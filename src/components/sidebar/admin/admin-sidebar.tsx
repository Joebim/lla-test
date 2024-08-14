"use client";

import clsx from "clsx";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { sidebarMenu } from "~/config/sidebarMenus";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const getLinkClassName = (route: string) => {
    return pathname.includes(route) ? "bg-black text-white" : "text-black";
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <aside
      className={clsx(
        `transition-all relative hidden flex-col border-r py-8 sm:flex`,
        isCollapsed ? "w-20 px-2" : "w-72 px-6",
      )}
    >
      <CustomButton
        size="icon"
        onClick={toggleSidebar}
        className="absolute -right-4 -top-4 z-50 hidden items-center justify-center rounded-full border bg-white px-2 py-1 text-[#C7D3E1] lg:flex"
      >
        {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
      </CustomButton>
      <div className="sticky top-0">
        <nav className="flex-1">
          <ul className="flex flex-col gap-[10px]">
            {sidebarMenu.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className={clsx(
                    `transition-all flex items-center justify-start gap-[12px] self-stretch whitespace-nowrap rounded-[14px] py-[12px] hover:bg-[#1B1B1B] hover:text-white`,
                    isCollapsed ? "px-1" : "px-[20px]",
                    isCollapsed ? "justify-center" : "",
                    getLinkClassName(item.path),
                  )}
                >
                  <item.icon className="h-7 w-7" />
                  {!isCollapsed && (
                    <span className="font-axiforma text-sm font-normal">
                      {item.title}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
