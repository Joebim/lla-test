import {
  ChartNoAxesColumnIncreasing,
  Crown,
  LucideIcon,
  Users,
} from "lucide-react";

export interface SidebarMenuItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

const baseRoute = `/dashboard/admin`;

export const sidebarMenu: SidebarMenuItem[] = [
  {
    title: "Overview",
<<<<<<< HEAD
    path: `${baseRoute}/overview`,
    icon: ChartNoAxesColumnIncreasing,
=======
    path: `${baseRoute}`,
    icon: Crown,
>>>>>>> ea455a17e6f46951546697adb87b83a42bc18c55
  },
  {
    title: "User Management",
    path: `${baseRoute}/user-management`,
    icon: Users,
  },
  {
    title: "Quest Management",
    path: `${baseRoute}/quest-management`,
    icon: Crown,
  },
];
