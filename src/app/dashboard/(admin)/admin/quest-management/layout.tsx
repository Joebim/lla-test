import { Crown, Download } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function QuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="felx w-full flex-col">
      <div className="mt-10 flex flex-col">
        <h1 className="font-axiforma text-2xl font-semibold capitalize">
          manage your quests
        </h1>
      </div>
      <Tabs defaultValue="medialibrary">
        <TabsList className="my-6">
          <div className="flex h-[48px] items-center justify-start gap-1 rounded-[80px] border p-[4px]">
            <TabsTrigger
              className="flex items-center justify-center gap-2 self-stretch rounded-[61px] border border-solid border-[color:var(--Neutral-10,#F8FAFB)] bg-[#F4F6F9] px-8 py-[18px] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.07)_inset]"
              value="medialibrary"
            >
              <Download className="h-4 w-4" />
              Media Library
            </TabsTrigger>
            <TabsTrigger
              value="quests"
              className="flex items-center justify-center gap-2 self-stretch rounded-[61px] px-8 py-[18px] hover:bg-gray-50"
            >
              <Crown className="h-4 w-4" />
              Quests
            </TabsTrigger>
          </div>
        </TabsList>
        {children}
      </Tabs>
    </div>
  );
}
