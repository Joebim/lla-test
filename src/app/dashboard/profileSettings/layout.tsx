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
        <main className="flex-1 bg-neutral-10 p-3 md:p-8">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
