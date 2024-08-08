"use client";

import { TabsContent } from "~/components/ui/tabs";
import MediaLibrary from "../../_component/media-library";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <TabsContent value="medialibrary">
        <MediaLibrary type="edit" id={params.id} />
      </TabsContent>
    </>
  );
}
