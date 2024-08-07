import DarkNav from "~/components/DarkNav/DarkNav";
import Footer from "~/components/footer/Footer";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <DarkNav />
      <div className="flex-1">{children}</div>

      <Footer />
    </div>
  );
}
