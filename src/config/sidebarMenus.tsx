import { Crown, LucideIcon, Users } from "lucide-react";

export interface SidebarMenuItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

const baseRoute = `/roles`;

export const sidebarMenu: SidebarMenuItem[] = [
  {
    title: "Overview",
    path: `${baseRoute}/overview`,
    icon: Crown,
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
