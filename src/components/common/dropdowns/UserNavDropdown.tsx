import { ChevronDown, CircleHelp, LogOut, Settings } from "lucide-react";
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

const handleLogout = async () => {
  await signOut({
    callbackUrl: "/",
  });
};

const UserNavDropdown = () => {
  const [imageError, setImageError] = useState(false);
  const { data: session, status } = useSession();
  const { user } = session ?? {};
  const router = useRouter();
  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/signin");
  //   } else if (status === "authenticated" && user) {
  //     if (!user.username) return; //router.push("/signup/profile");
  //   } else router.push("/");
  // }, [status, router, user]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-full">
              {user ? (
                <>
                  <Image
                    src={user?.image ?? ""}
                    width={36}
                    height={36}
                    className="rounded-full"
                    alt="user profile"
                    onError={() => setImageError(true)}
                  />
                  <div
                    className={`absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary-30 text-xl font-semibold text-white ${imageError ? "z-10" : "-z-10"}`}
                  >
                    {user?.username
                      ? user.username.charAt(0).toUpperCase()
                      : "D"}
                  </div>
                </>
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-20" />
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

export default UserNavDropdown;
