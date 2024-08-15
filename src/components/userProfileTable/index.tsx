import clsx from "clsx";
import { Trash2 } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface tableProperties {
  devices?: string;
  lastActivity?: string;
  icon?: React.ReactNode;
  className?: string;
  session?: [
    {
      lastActivity?: string;
      devices?: string;
      icon?: string;
    },
  ];
}
const UserProfileTable = ({
  className,
  lastActivity,
  icon,
  devices,
  session,
}: tableProperties) => {
  const renderRow = (data: tableProperties, index: number) => {
    const isEven = index % 2 === 1;
    const rowClass = isEven
      ? "bg-neutral-10 border-none rounded-[15px]"
      : "bg-white border-none";

    return (
      <TableRow key={devices} className={rowClass}>
        <TableCell className="flex items-center gap-3 font-medium">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-neutral-40">
            {icon}
          </div>
          <p>{devices ?? "N/A"}</p>
        </TableCell>
        <TableCell>{lastActivity ?? "N/A"}</TableCell>
        <TableCell className="text-red-400">
          <Trash2 className="w-[20px]" />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div className="w-full rounded-[10px] border-[1px] border-secondary-10 p-[20px]">
      <div className="flex items-center justify-between pb-[10px]">
        <h3 className="font-bold">Sessions By Device</h3>
        <select
          name=""
          id=""
          className="rounded-[5px] border-[1px] border-secondary-20 p-[6px] text-[13px] text-secondary-70 outline-none"
        >
          <option value="">Last 30 days</option>
          <option value="">Last 7 days</option>
        </select>
      </div>
      <Table className={clsx(className, "w-[100%]")}>
        <TableHeader className="bg-neutral-10">
          <TableRow className="rounded-[15px] border-none">
            <TableHead className="font-semibold">
              Device you&apos;re logged in
            </TableHead>
            <TableHead className="font-semibold">Last activity</TableHead>
            <TableHead className="font-semibold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {session && session.map((slug, index) => renderRow(slug, index))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserProfileTable;
