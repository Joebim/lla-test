import {
  ElectricIcon,
  GroupIcon,
  PersonDisabledIcon,
  PersonInactiveIcon,
} from "./icons";

export const overviewData = [
  {
    title: "Total Users",
    amount: 5000,
    percentage: 10,
    icon: <GroupIcon />,
  },
  {
    title: "Active Users",
    amount: 2200,
    percentage: -90,
    icon: <ElectricIcon />,
  },
  {
    title: "Inactive Users",
    amount: 920,
    percentage: 10,
    icon: <PersonInactiveIcon />,
  },
  {
    title: "Disabled Users",
    amount: 880,
    percentage: 40,
    icon: <PersonDisabledIcon />,
  },
];

export const userData = [
  {
    uid: "551423",
    name: "Afolabi Olanipekun",
    email: "Afolabiolanipekun@gmail.com",
    signupDate: "13/08/2024",
    isActive: true,
    image: "/avatar/avatar-1.png",
  },
  {
    uid: "394156",
    name: "Daniel Okoye",
    email: "danielokoye@gmail.com",
    signupDate: "02/07/2024",
    isActive: true,
    image: "/avatar/avatar-2.png",
  },
  {
    uid: "332156",
    name: "Joseph Brendan",
    email: "josephbrendan@gmail.com",
    signupDate: "13/08/2024",
    isActive: false,
    image: "/avatar/avatar-1.png",
  },
  {
    uid: "125423",
    name: "Ifunanya Adedapo",
    email: "ifunanya@gmail.com",
    signupDate: "02/04/2024",
    isActive: false,
    image: "/avatar/avatar-3.png",
  },
  {
    uid: "255462",
    name: "Busola Igwe",
    email: "busolaigwe@gmail.com",
    signupDate: "02/04/2024",
    isActive: false,
    image: "/avatar/avatar-4.png",
  },
  {
    uid: "125423",
    name: "Jennifer Onyinye",
    email: "jenniferonyinye@gmail.com",
    signupDate: "21/02/2024",
    isActive: true,
    image: "/avatar/avatar-3.png",
  },
  {
    uid: "285767",
    name: "Jack Johnson",
    email: "jacjjohnson@gmail.com",
    signupDate: "21/02/2024",
    isActive: true,
    image: "/avatar/avatar-4.png",
  },
  {
    uid: "551433",
    name: "Moshood Adedayo",
    email: "moshoodadedayo@gmail.com",
    signupDate: "20/02/2024",
    isActive: true,
    image: "/avatar/avatar-2.png",
  },
];
