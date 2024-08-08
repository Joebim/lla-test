import Footer from "~/components/footer/Footer";
import LightNav from "~/components/light-navbar/LightNav";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <LightNav />
      <div className="flex-1">{children}</div>

      <Footer />
    </div>
  );
}
