export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{ fontFamily: "Axiforma" }}
      className="h-full min-h-screen w-full bg-neutral-10 p-3 md:p-5"
    >
      {children}
    </main>
  );
}
