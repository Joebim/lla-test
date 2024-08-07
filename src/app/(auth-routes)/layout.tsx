import MockLayout from "~/components/mock-dashboard/MockLayout";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <MockLayout />
      <div className="flex-1">{children}</div>
    </div>
  );
}
