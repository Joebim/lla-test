import { Suspense } from "react";

import ProfileSettingsMenu from "./_components/profile-settings-menu";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="sm:pb-auto flex h-full flex-col items-center justify-start bg-[#F8FAFB] py-[20px] font-axiforma md:px-[24px] md:py-[52px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex w-full rounded-[0px] border border-neutral-40 bg-white px-6 py-7 sm:rounded-[10px]">
          <p className="text-xl font-medium sm:text-3xl">Account Settings</p>
        </div>
        <div className="mt-4 flex w-full gap-[40px] sm:mt-[36px] md:flex-row">
          <ProfileSettingsMenu />
          <div className="flex w-full grow flex-col gap-[48px] rounded-[18px] max-md:mr-6">
            <Suspense>{children}</Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
