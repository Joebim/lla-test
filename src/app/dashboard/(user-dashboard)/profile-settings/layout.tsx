import { Suspense } from "react";

import ProfileSettingsMenu from "./_components/profile-settings-menu";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-[#F8FAFB] md:px-[24px] md:py-[52px]">
      <header className="flex w-full max-w-[900px] rounded-[10px] border border-neutral-40 bg-white px-4 py-4">
        <p className="text-[32px]">Account Settings</p>
      </header>
      <div className="mt-[36px] flex w-full max-w-[900px] gap-[40px] md:flex-row">
        <ProfileSettingsMenu />
        <div className="flex w-full min-w-[500px] grow flex-col gap-[48px] rounded-[18px]">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </main>
  );
}
