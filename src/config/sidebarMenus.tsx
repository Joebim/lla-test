import {
  ChartNoAxesColumnIncreasing,
  Crown,
  FileQuestion,
  Files,
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
    path: `${baseRoute}/overview`,
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "User Management",
    path: `${baseRoute}/user-management`,
    icon: Users,
  },
  {
    title: "Media Library",
    path: `${baseRoute}/media-library`,
    icon: Files,
  },
  {
    title: "Quest Management",
    path: `${baseRoute}/quest-management`,
    icon: Crown,
  },
  {
    title: "Manage FAQ",
    path: `${baseRoute}/manage-faq`,
    icon: FileQuestion,
  },
];
