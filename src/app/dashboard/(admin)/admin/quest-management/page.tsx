import { Crown, Download } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const QuestManagementPage = () => {
  return (
    <div className="felx w-full flex-col">
      <div className="flex flex-col">
        <h1>manage your quests</h1>
      </div>
      <Tabs defaultValue="account">
        <TabsList className="my-4">
          <div className="flex h-[48px] items-center justify-start rounded-lg border p-[4px]">
            <TabsTrigger
              className="flex items-center justify-center gap-2 self-stretch rounded-lg px-8 py-[18px]"
              value="account"
            >
              <Download />
              Media Library
            </TabsTrigger>
            <TabsTrigger value="password">
              <Crown />
              Quests
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default QuestManagementPage;
