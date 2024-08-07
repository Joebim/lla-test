import { Suspense } from "react";

import UserNav from "~/components/common/Navbars/UserNav";
import LoggedInFooter from "~/components/footer/LoggedInFooter";

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
