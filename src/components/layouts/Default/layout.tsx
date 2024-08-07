import React, { ReactNode } from "react";

import Footer from "~/components/footer/Footer";
import LightNav from "~/components/light-navbar/LightNav";

interface LayoutProperties {
  children: ReactNode;
}

const Layout: React.FC<LayoutProperties> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <LightNav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
