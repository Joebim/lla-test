import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  LogOut,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

interface ComponentProperties {
  username?: string;
  profileImage?: string;
  email?: string;
}

const AdminNavDropdown = ({
  profileImage,
  username,
  email,
}: ComponentProperties) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DropdownMenu onOpenChange={(open: boolean) => setIsOpen(open)}>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex items-center gap-1.5 rounded-[40px] border border-neutral-40 bg-white p-1 pr-2.5">
            <div className="flex items-center gap-2">
              {!profileImage && (
                <Image
                  src="/navbar/profile-standin.svg"
                  width={36}
                  height={36}
                  className="rounded-full"
                  alt="user profile"
                />
              )}
              {profileImage && (
                <Image
                  src={profileImage}
                  width={36}
                  height={36}
                  className="rounded-full"
                  alt="user profile"
                />
              )}
              <div className="flex flex-col items-start justify-center gap-0">
                <h6 className="font-axiforma text-sm font-semibold leading-[20px] text-secondary-120">
                  {username ?? "John Doe"}
                </h6>
                <h6 className="font-axiforma text-sm font-normal leading-[20px] text-secondary-70">
                  Super Admin
                </h6>
              </div>
            </div>
            {isOpen ? (
              <ChevronUp className="text-secondary-120" />
            ) : (
              <ChevronDown className="text-secondary-120" />
            )}
            {/* <ChevronDown className="text-secondary-120" /> */}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[292px] rounded-xl bg-white p-0"
          style={{
            boxShadow:
              "0px -2px 4px 0px rgba(211, 211, 211, 0.43), 0px 4px 4px 0px rgba(211, 211, 211, 0.33)",
          }}
        >
          <DropdownMenuLabel className="flex items-start justify-between self-stretch bg-secondary-110 p-5">
            <div className="flex flex-col items-start gap-1">
              <h4 className="font-axiforma text-sm font-medium leading-none text-white">
                {username && username}
                {!username && "John Doe"}
              </h4>
              <h6 className="font-axiforma text-xs font-normal text-secondary-50">
                {email && email}
                {!email && "johndoe@gmail.com"}
              </h6>
            </div>
            <span className="flex items-center justify-center rounded-[20px] border border-white bg-white px-3 py-2.5 font-axiforma text-xs text-primary-110">
              Super Admin
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="w-full p-0">
            <Link
              href={"/dashboard/admin/settings"}
              className="flex w-full items-center gap-3 border-b border-b-neutral-30 px-5 py-3 no-underline outline-none hover:bg-neutral-30"
            >
              <Settings size={16} className="text-neutral-90" />
              <div
                className="text-sm leading-5 text-neutral-140"
                style={{ fontFamily: "Axiforma" }}
              >
                Settings
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full p-0">
            <Link
              href={"/dashboard/profile-settings/support"}
              className="flex w-full items-center gap-3 border-b border-b-neutral-30 px-5 py-3 no-underline outline-none hover:bg-neutral-30"
            >
              <CircleHelp size={16} className="text-neutral-90" />
              <div
                className="text-sm leading-5 text-neutral-140"
                style={{ fontFamily: "Axiforma" }}
              >
                Support
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="h-1 bg-primary-10" />
          <DropdownMenuItem className="w-full p-0">
            <Link
              href={"/signin"}
              className="flex items-center gap-3 px-5 py-3 text-critical-100 no-underline outline-none"
            >
              <LogOut size={16} />
              <div className="font-axiforma text-sm leading-5">Sign Out</div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default AdminNavDropdown;
