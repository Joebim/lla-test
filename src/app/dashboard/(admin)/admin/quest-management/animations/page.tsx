"use client";

import { TabsContent } from "~/components/ui/tabs";
import useMediaStore from "~/store/media-library-store";
import Collections from "../_component/collections";
import { RenderMediaLibrary } from "../_component/media-library";
import NoCollection from "../_component/no-collection";

const AnimationsPage = () => {
  const { collections: allCollection } = useMediaStore((state) => state);
  const specificCollections = allCollection.filter(
    (state) => state.type === "animations",
  );
  return (
    <>
      <TabsContent value="medialibrary">
        <RenderMediaLibrary dataType="animations">
          {specificCollections.length > 0 && (
            <Collections
              collections={specificCollections}
              dataType="animations"
            />
          )}
          {specificCollections.length <= 0 && (
            <NoCollection dataType="animations" />
          )}
        </RenderMediaLibrary>
      </TabsContent>
    </>
  );
};

export default AnimationsPage;
