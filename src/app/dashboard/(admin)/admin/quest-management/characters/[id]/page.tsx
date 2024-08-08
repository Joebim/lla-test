"use client";

import { TabsContent } from "~/components/ui/tabs";
import CharacterMediaLibrary from "../../_component/character/media";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <TabsContent value="medialibrary">
        <CharacterMediaLibrary type="edit" id={params.id} />
      </TabsContent>
    </>
  );
}
