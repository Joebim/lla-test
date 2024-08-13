export type User = {
  id: string;
  username: string;
  email: string;
  status: boolean;
  created_at: string;
  is_disabled: boolean;
  avatar_url: string;
};

export type adminDashboardResponse = {
  current_page: number;
  data: User[];
  first_page_url: string;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
};

// type UserStatistics = {
//   current_month: number;
//   previous_month: number;
//   percentage_difference: string;
// };
export type UserData = {
  current_month: number;
  previous_month: number;
  percentage_difference: number;
};

export type OverviewData = {
  total_users: UserData;
  active_users_count: UserData;
  inactive_users_count: UserData;
  disabled_users_count: UserData;
};

export type StatisticItem = {
  title: string;
  amount: number;
  percentage: number;
  icon: JSX.Element;
};
