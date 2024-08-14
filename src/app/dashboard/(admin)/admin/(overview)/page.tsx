/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
"use client";

import { EllipsisVertical } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  ExportUsers,
  getAllUsers,
  getUserByStatus,
  getUsersByDate,
  getUsersStats,
} from "~/actions/adminDashboard/route";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Skeleton } from "~/components/ui/skeleton";
import {
  OverviewData,
  PaginationRequest,
  StatisticItem,
  User,
} from "./adminDashboardTypes";
import {
  ChevronLeft,
  ChevronRight,
  ElectricIcon,
  ExpandMore,
  FilterIcon,
  GroupIcon,
  PersonDisabledIcon,
  PersonInactiveIcon,
} from "./icons";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
const formatDate2 = (dateString: Date | string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
const formatDate3 = (date: Date | string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const Overview = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [pagination, setPagination] = useState<PaginationRequest>({
    totalPages: 0,
    totalCount: 0,
    page: 1,
    perPage: 15,
  });

  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await getAllUsers(pagination, session?.access_token);
        setUsers(response?.data?.data || []);
        setPagination((previous: PaginationRequest) => ({
          ...previous,
          totalPages: response?.data?.last_page || 0,
          totalCount: response?.data?.total || 0,
        }));
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [pagination?.page]);

  const [overviewData, setOverViewData] = useState<OverviewData | undefined>();
  const [isLoadingOverviewData, setIsLoadingOverviewData] = useState(true);

  useEffect(() => {
    setIsLoadingOverviewData(true);

    async function fetchOverviewData() {
      try {
        const response = await getUsersStats(session?.access_token);
        setOverViewData(response?.data?.data || undefined);
        setIsLoadingOverviewData(false);
      } catch (error) {
        console.error(error);

        setIsLoadingOverviewData(false);
      }
    }
    fetchOverviewData();
  }, []);

  const handlePageChange = (newPage: number) => {
    setPagination((previous) => ({
      ...previous,
      page: newPage + 1,
    }));
  };

  const [status, setStatus] = useState<boolean | undefined>();

  const handleStatusChange = (newStatus: boolean) => {
    setStatus(newStatus);
  };

  useEffect(() => {
    async function handleFilter() {
      setIsLoading(true);
      try {
        if (status !== undefined) {
          const response = await getUserByStatus(status, session?.access_token);
          setUsers(response?.data?.data || []);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    handleFilter();
  }, [setIsLoading, setUsers, status]);
  const [fromDate, setFromDate] = useState<Date | string>("");
  const onChangeFromDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(new Date(event.target.value));
  };
  const [toDate, setToDate] = useState<Date | string>("");
  const onChangeToDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(new Date(event.target.value));
  };
  useEffect(() => {
    async function handleDate() {
      try {
        if (fromDate && toDate) {
          const formattedFromDate = formatDate3(fromDate);
          const formattedToDate = formatDate3(toDate);
          if (
            formattedFromDate !== "NaN-NaN-NaN" &&
            formattedToDate !== "NaN-NaN-NaN"
          ) {
            setIsLoading(true);
            const response = await getUsersByDate(
              formatDate3(fromDate),
              formatDate3(toDate),
              session?.access_token,
            );
            setUsers(response?.data?.data || []);
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error(error);

        throw error;
      }
    }
    handleDate();
  }, [setIsLoading, setUsers, fromDate, toDate]);

  const total = users.length;
  const limit = pagination.perPage;

  const pageCount = Math.floor(total / limit) + (total % limit === 0 ? 0 : 1);

  const statisticsData: StatisticItem[] =
    overviewData === undefined
      ? []
      : [
          {
            title: "Total Users",
            amount:
              overviewData.total_users.current_month -
              overviewData.total_users.previous_month,
            percentage: overviewData.total_users.percentage_difference,
            icon: <GroupIcon />,
          },
          {
            title: "Active Users",
            amount:
              overviewData.active_users_count.current_month -
              overviewData.active_users_count.previous_month,
            percentage: overviewData.active_users_count.percentage_difference,
            icon: <ElectricIcon />,
          },
          {
            title: "Inactive Users",
            amount:
              overviewData.inactive_users_count.current_month -
              overviewData.inactive_users_count.previous_month,
            percentage: overviewData.inactive_users_count.percentage_difference,
            icon: <PersonInactiveIcon />,
          },
          {
            title: "Disabled Users",
            amount:
              overviewData.disabled_users_count.current_month -
              overviewData.disabled_users_count.previous_month,
            percentage: overviewData.disabled_users_count.percentage_difference,
            icon: <PersonDisabledIcon />,
          },
        ];
  // Export Users As CSV
  const [isLoadingCSV, setIsLoadingCSV] = useState(false);
  async function Export() {
    try {
      setIsLoadingCSV(true);
      const response = await ExportUsers(session?.access_token);
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "users.csv";
      document.body.append(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      setIsLoadingCSV(false);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <div className="w-full font-axiforma">
      <header className="mb-[33px] grid w-full gap-2 sm:grid-cols-2 sm:gap-[24px] lg:grid-cols-4">
        {isLoadingOverviewData ? (
          <>
            {" "}
            <Skeleton className="h-[150px] w-full rounded-2xl bg-neutral-70" />
            <Skeleton className="h-[150px] w-full rounded-2xl bg-neutral-70" />
            <Skeleton className="h-[150px] w-full rounded-2xl bg-neutral-70" />
            <Skeleton className="h-[150px] w-full rounded-2xl bg-neutral-70" />
          </>
        ) : (
          <>
            {Object.keys(overviewData || {}).length > 0 &&
              statisticsData.map((data: StatisticItem, index: number) => (
                <div
                  key={index}
                  className="w-full rounded-[12px] border-[1px] border-neutral-40 p-[24px]"
                >
                  <div className="mb-[24px] flex items-center justify-between gap-2">
                    <h2 className="text-[14px] font-bold text-neutral-100">
                      {data.title}
                    </h2>
                    <div className="shrink-0">{data.icon}</div>
                  </div>
                  <h1 className="text-secondary-140 font-axiformaExtraBold text-[24px] lg:text-[32px]">
                    {data.amount.toLocaleString()}
                  </h1>
                  <p className="font-axiforma text-[12px] font-normal leading-[19.01px]">
                    <span className="text-[#F8104]">{data.percentage}</span>{" "}
                    from last month
                  </p>
                </div>
              ))}
          </>
        )}
      </header>

      <div className="mb-[32px] flex justify-between gap-2">
        <div>
          <h1 className="mb-[10px] font-axiformaExtraBold text-[24px] text-[#525252]">
            Manage Users
          </h1>
          <p className="text-[#525252]">Manage Users & Track Activity</p>
        </div>
        <div className="flex gap-[16px] self-center">
          <button
            onClick={Export}
            className="flex h-[44px] items-center gap-[14px] rounded-[4px] border-[1px] border-[#CBD5E1] px-[15px] py-[12.5px] hover:border-primary-100"
          >
            {isLoadingCSV ? (
              <span className="spinner">
                <Skeleton className="animate-spin" />
                Processing...
              </span>
            ) : (
              <span className="text-[14px]">Export</span>
            )}
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex h-[44px] items-center gap-[11px] rounded-[4px] border-[1px] border-[#CBD5E1] px-[15px] py-[12.5px] hover:border-primary-100">
                <FilterIcon />
                <span className="text-[14px]">Filter</span>
                <ExpandMore />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="min-w-[182px] rounded-[6px] border-[1px] border-neutral-40 bg-white"
            >
              <DropdownMenuLabel className="pb-0 text-[12px] font-normal text-[#AAAAAA]">
                By status
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => handleStatusChange(true)}
                className="border-b-[1px] border-b-neutral-40 text-[#09090B]"
              >
                Active users
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleStatusChange(false)}
                className="border-b-[1px] border-b-neutral-40 text-[#09090B]"
              >
                Inactive users
              </DropdownMenuItem>
              <DropdownMenuLabel className="text-[12px] font-normal text-[#AAAAAA]">
                By date
              </DropdownMenuLabel>
              <div className="flex items-center justify-between px-[8px] pb-[8px] text-[#09090B]">
                <label className="flex items-center gap-[6px] text-[14px]">
                  From: <span>{fromDate ? formatDate2(fromDate) : ""}</span>{" "}
                  <br />
                  <div className="relative">
                    <input
                      type="date"
                      value={fromDate ? formatDate2(fromDate) : ""}
                      onChange={onChangeFromDate}
                      className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                    />
                    <ExpandMore />
                  </div>
                </label>
                <label className="flex items-center gap-[6px] text-[14px]">
                  To: <span>{toDate ? formatDate2(toDate) : ""}</span> <br />
                  <div className="relative">
                    <input
                      type="date"
                      value={toDate ? formatDate2(toDate) : ""}
                      onChange={onChangeToDate}
                      className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                    />
                    <ExpandMore />
                  </div>
                </label>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Table */}
      {isLoading ? (
        <div className="flex w-full flex-col gap-8">
          {" "}
          <Skeleton className="h-[40px] w-full rounded-2xl bg-neutral-70" />
          <Skeleton className="h-[40px] w-full rounded-2xl bg-neutral-70" />
          <Skeleton className="h-[40px] w-full rounded-2xl bg-neutral-70" />
          <Skeleton className="h-[40px] w-full rounded-2xl bg-neutral-70" />
          <Skeleton className="h-[40px] w-full rounded-2xl bg-neutral-70" />
          <Skeleton className="h-[40px] w-full rounded-2xl bg-neutral-70" />
          <Skeleton className="h-[40px] w-full rounded-2xl bg-neutral-70" />
          <Skeleton className="h-[40px] w-full rounded-2xl bg-neutral-70" />
        </div>
      ) : (
        <div className="w-full overflow-x-auto">
          <div className="w-full overflow-x-auto">
            <div className="grid min-h-[58px] w-full grid-cols-[120px_1fr_240px_200px_100px] justify-between gap-2 rounded-t-[12px] px-[24px] py-[16px] odd:bg-neutral-10 even:bg-white 2xl:px-[56px]">
              <h3>User ID</h3>
              <h3>Name</h3>
              <h3>Signup Date</h3>
              <h3>Status</h3>
              <h3>Action</h3>
            </div>
            {users.length > 0 ? (
              users.map((data, index) => (
                <div
                  key={index}
                  className="grid min-h-[58px] w-full grid-cols-[120px_1fr_240px_200px_100px] items-center justify-between gap-2 px-[24px] py-[16px] odd:bg-neutral-10 even:bg-white 2xl:px-[56px]"
                >
                  <h3 className="text-[#0A0A0A]">{data.id}</h3>
                  <div className="flex gap-[8px]">
                    <figure>
                      <Image
                        src={data.avatar_url || "/avatar/avatar-1.png"}
                        alt="Avatar"
                        width={45}
                        height={45}
                        className="w-[45px] shrink-0"
                      />
                    </figure>
                    <div>
                      <h1 className="font-medium text-[#0A0A0A]">
                        {data.username}
                      </h1>
                      <p className="text-[14px] text-[#525252]">{data.email}</p>
                    </div>
                  </div>
                  <h3>{formatDate(data.created_at)}</h3>
                  <div>
                    {data.status ? (
                      <div className="flex items-center gap-[8px] text-[#0A0A0A]">
                        <div className="h-[12px] w-[12px] rounded-full bg-[#6DC347]"></div>
                        <p className="mt-1">Active</p>
                      </div>
                    ) : (
                      <div className="flex items-center gap-[8px] text-[#0A0A0A]">
                        <div className="h-[12px] w-[12px] rounded-full bg-[#DC2626]"></div>
                        <p className="mt-1">Inactive</p>
                      </div>
                    )}
                  </div>
                  <div className="grid place-items-center self-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          className="text-neutral-dark-2 bg-transparent hover:bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                          size={"icon"}
                        >
                          <EllipsisVertical size={16} color="#09090b" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="center"
                        className="min-w-0 rounded-[6px] bg-white"
                      >
                        <DropdownMenuLabel className="sr-only">
                          Actions
                        </DropdownMenuLabel>

                        <DropdownMenuItem
                          className="pr-8 text-center"
                          inset
                          onClick={() => {
                            router.push(`/dashboard/admin/users/${data?.id}`);
                          }}
                        >
                          View
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h1 className="mt-4 text-center text-base leading-[normal] sm:text-[2rem]">
                  Unfortunately User within this range is not available
                </h1>
              </div>
            )}
          </div>
          {/* Pagination */}
          <div className="mt-[24px] flex justify-start">
            <Button
              variant="outline"
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="mr-2 flex items-center gap-2"
            >
              <ChevronLeft />
              Previous
            </Button>

            {Array.from({ length: pagination?.totalPages }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-3 py-3 ${
                  pagination?.page === index + 1
                    ? "border-[##E4E4E7]"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <Button
              variant="outline"
              onClick={() => handlePageChange(pagination.page)}
              disabled={pagination.page === pageCount}
              className="flex items-center gap-3"
            >
              Next
              <ChevronRight />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
