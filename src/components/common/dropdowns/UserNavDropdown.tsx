import { ChevronDown, CircleHelp, LogOut, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const UserNavDropdown = ({
  profileImage,
  username,
  email,
}: ComponentProperties) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 overflow-hidden rounded-full">
              {!profileImage && (
                <Image
                  src="/images/_Avatar Circle.svg"
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
            </div>

            <ChevronDown className="hidden text-secondary-120 md:block" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[230px] rounded-xl bg-white p-0">
          <DropdownMenuLabel className="bg-secondary-110 p-3 text-white">
            <h3
              className="text-sm leading-none"
              style={{ fontFamily: "Axiforma" }}
            >
              {username && username}
              {!username && "John Doe"}
            </h3>
            <div
              className="text-xs text-secondary-50"
              style={{ fontFamily: "Axiforma" }}
            >
              {email && email}
              {!email && "johndoe@gmail.com"}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="w-full p-0">
            <Link
              href={"/dashboard/profile-settings"}
              className="flex w-full items-center gap-3 border-b border-b-neutral-30 p-2 no-underline outline-none"
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
              href={"/profile-settings/support"}
              className="flex items-center gap-3 p-2 no-underline outline-none"
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
              className="flex items-center gap-3 p-2 text-critical-100 no-underline outline-none"
            >
              <LogOut size={16} />
              <div
                className="text-sm leading-5"
                style={{ fontFamily: "Axiforma" }}
              >
                Sign Out
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserNavDropdown;
