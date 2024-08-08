"use client";

import { TabsContent } from "~/components/ui/tabs";
import ObjectMediaLibrary from "../../_component/objects/media";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <TabsContent value="medialibrary">
        <ObjectMediaLibrary type="edit" id={params.id} />
      </TabsContent>
    </>
  );
}
