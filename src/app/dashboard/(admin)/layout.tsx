import { Suspense } from "react";

import AdminNav from "~/components/AdminNav/AdminNav";
import AdminSidebar from "~/components/sidebar/admin/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AdminNav />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-white p-3">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
