import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  LogOut,
  Settings,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
const handleLogout = async () => {
  await signOut({
    callbackUrl: "/",
  });
};
const AdminNavDropdown = ({
  profileImage,
  username,
  // email,
}: ComponentProperties) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const { user } = session ?? {};
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated" && user) {
      if (!user.username) return; //router.push("/signup/profile");
    } else router.push("/");
  }, [status, router, user]);

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
          <DropdownMenuLabel className="flex flex-wrap items-start justify-start gap-3 bg-secondary-110 p-5">
            <h3
              className="text-sm leading-none"
              style={{ fontFamily: "Axiforma" }}
            >
              {user && user.username}
              {!user && "John Doe"}
            </h3>
            <div
              className="text-xs text-secondary-50"
              style={{ fontFamily: "Axiforma" }}
            >
              {user && user.email}
              {!user && "johndoe@example.com"}
            </div>
            <span className="flex items-start justify-start rounded-[20px] border border-white bg-white px-3 py-2.5 font-axiforma text-xs text-primary-110">
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
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 p-2 text-critical-100 no-underline outline-none"
            >
              <LogOut size={16} />
              <div
                className="text-sm leading-5"
                style={{ fontFamily: "Axiforma" }}
              >
                Sign Out
              </div>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default AdminNavDropdown;
