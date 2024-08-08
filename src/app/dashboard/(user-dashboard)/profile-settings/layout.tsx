import { Suspense } from "react";

import ProfileSettingsMenu from "./_components/profile-settings-menu";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="sm:pb-auto flex h-full w-full flex-col items-center justify-start bg-white py-[20px] font-axiforma sm:bg-[#F8FAFB] md:px-[24px] md:py-[52px]">
      <header className="flex w-full max-w-[900px] rounded-[0px] border border-neutral-40 bg-white px-4 py-4 sm:rounded-[10px]">
        <p className="text-[20px] sm:text-[30px]">Account Settings</p>
      </header>
      <div className="mt-4 flex w-full gap-[40px] sm:mt-[36px] sm:max-w-[900px] md:flex-row">
        <ProfileSettingsMenu />
        <div className="flex w-full grow flex-col gap-[48px] rounded-[18px] max-md:mr-6">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </main>
  );
}
