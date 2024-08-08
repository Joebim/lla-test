import { Suspense } from "react";

import LoggedInFooter from "~/components/footer/LoggedInFooter";
import UserNav from "~/components/UserNav/UserNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <UserNav />
      <div className="w-full flex-grow overflow-scroll bg-white">
        <Suspense>{children}</Suspense>
      </div>
      <LoggedInFooter />
    </div>
  );
}
