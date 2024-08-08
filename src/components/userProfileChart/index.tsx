"use client";

import clsx from "clsx";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const chartData = [
  { month: "Total Quests", desktop: 4, fill: "rgb(var(--critical-100))" },
  { month: "Completed Quests", desktop: 6, fill: "rgb(var(--success-140))" },
  { month: "Game Streak", desktop: 8, fill: "rgb(var(--primary-80))" },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const UserProfileChart = ({ className }: { className?: string }) => {
  return (
    <div className="mb-[20px] w-full rounded-[10px] border-2 p-[20px] lg:mb-0">
      <div className="flex items-center justify-between pb-[7px]">
        <h3 className="font-bold">Gameplay Stats</h3>
        <select
          name=""
          id=""
          className="rounded-[5px] border-[1px] border-secondary-20 p-[6px] text-[13px] text-secondary-70 outline-none"
        >
          <option value="">Last 7 days</option>
          <option value="">Last 30 days</option>
        </select>
      </div>
      <ChartContainer className={clsx(className)} config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default UserProfileChart;
