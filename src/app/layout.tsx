import type { Metadata } from "next";
import { Abel, Inter, Lilita_One } from "next/font/google";

import { ToastProvider } from "~/components/ui/toast";

import "./globals.css";

import GotoTop from "~/components/miscellaneous/goto-top";
import Progress_bar from "~/components/progress-bar";
import { Toaster } from "~/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Delve - Language Learning AI 3D Game",
  description:
    "Explore 3D worlds, solve puzzles, and learn new languages with AI-driven gameplay in Delve!",
};
export const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
});
export const abel = Abel({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="mx-auto w-full">
          <ToastProvider>
            <Progress_bar />
            {children}
            <Toaster />
          </ToastProvider>
        </div>
        <GotoTop />
      </body>
    </html>
  );
}
