"use client";

import { TabsContent } from "~/components/ui/tabs";
import AnimationsMediaLibrary from "../../_component/animations/media";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <TabsContent value="medialibrary">
        <AnimationsMediaLibrary type="edit" id={params.id} />
      </TabsContent>
    </>
  );
}
