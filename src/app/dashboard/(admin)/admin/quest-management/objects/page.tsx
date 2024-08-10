"use client";

import { TabsContent } from "~/components/ui/tabs";
import useMediaStore from "~/store/media-library-store";
import Collections from "../_component/collections";
import { RenderMediaLibrary } from "../_component/media-library";
import NoCollection from "../_component/no-collection";

const ObjectsPage = () => {
  const { collections: allCollection } = useMediaStore((state) => state);
  const specificCollections = allCollection.filter(
    (state) => state.type === "objects",
  );
  return (
    <>
      <TabsContent value="medialibrary">
        <RenderMediaLibrary dataType="objects">
          {specificCollections.length > 0 && (
            <Collections collections={specificCollections} dataType="objects" />
          )}
          {specificCollections.length <= 0 && (
            <NoCollection dataType="objects" />
          )}
        </RenderMediaLibrary>
      </TabsContent>
    </>
  );
};

export default ObjectsPage;
