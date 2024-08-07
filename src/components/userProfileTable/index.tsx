import clsx from "clsx";
import { Laptop, Smartphone, Trash2 } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface tableProperties {
  devices: string;
  lastActivity: string;
  icon: React.ReactNode;
}

const data = [
  {
    devices: "Iphone 15 pro",
    lastActivity: "1 min ago",
    icon: <Smartphone />,
  },
  {
    devices: "HP proBook 11",
    lastActivity: "2 days ago",
    icon: <Laptop />,
  },
  {
    devices: "iPhone Xsmax",
    lastActivity: "24 hours ago",
    icon: <Smartphone />,
  },
  {
    devices: "HP proBook 11",
    lastActivity: "3 days ago",
    icon: <Laptop />,
  },
];

const UserProfileTable = ({ className }: { className?: string }) => {
  const renderRow = (data: tableProperties, index: number) => {
    const isEven = index % 2 === 1;
    const rowClass = isEven ? "bg-neutral-20" : "bg-white";

    return (
      <TableRow key={data.devices} className={rowClass}>
        <TableCell className="flex items-center gap-3 font-medium">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-40">
            {data.icon}
          </div>
          <p>{data.devices}</p>
        </TableCell>
        <TableCell>{data.lastActivity}</TableCell>
        <TableCell className="text-red-400">
          <Trash2 />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div className="w-full rounded-[10px] border-2 p-[20px]">
      <div className="mb-[10px]">
        <h3 className="font-bold">Sessions By Device</h3>
      </div>
      <Table className={clsx(className, "w-[100%]")}>
        <TableHeader className="bg-neutral-20">
          <TableRow>
            <TableHead className="font-semibold">
              Device you&apos;re logged in
            </TableHead>
            <TableHead className="font-semibold">Last activity</TableHead>
            <TableHead className="font-semibold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((slug, index) => renderRow(slug, index))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserProfileTable;
