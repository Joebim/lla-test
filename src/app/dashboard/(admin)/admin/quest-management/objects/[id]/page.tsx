"use client";

import { TabsContent } from "~/components/ui/tabs";
import { MutateMediaLibrary } from "../../_component/media-library";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <TabsContent value="medialibrary">
        <MutateMediaLibrary dataType="objects" id={params.id} />
      </TabsContent>
    </>
  );
}
