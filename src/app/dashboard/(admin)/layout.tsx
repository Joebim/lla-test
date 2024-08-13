import { Suspense } from "react";

import AdminNav from "~/components/AdminNav/AdminNav";
import AdminSidebar from "~/components/sidebar/admin/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col">
      <AdminNav />
      <div className="flex">
        <AdminSidebar />
        <main className="w-full bg-white p-3">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
