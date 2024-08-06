import DarkNav from "~/components/DarkNav/DarkNav";
import GotoTop from "~/components/miscellaneous/goto-top";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <DarkNav />
      <div className="flex-1">{children}</div>
      <GotoTop />
    </div>
  );
}
