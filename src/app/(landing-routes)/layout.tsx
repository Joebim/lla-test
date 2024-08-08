import AdminNav from "~/components/AdminNav/AdminNav";
import DarkNav from "~/components/DarkNav/DarkNav";
import Footer from "~/components/footer/Footer";
import GotoTop from "~/components/miscellaneous/goto-top";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      {/* <DarkNav /> */}
      <AdminNav />
      <div className="flex-1">{children}</div>
      <GotoTop />
      <Footer />
      <DarkNav />
      <div className="flex-1 bg-neutral-10">{children}</div>
    </div>
  );
}
