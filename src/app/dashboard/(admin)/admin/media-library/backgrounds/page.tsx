"use client";

import useMediaStore from "~/store/media-library-store";
import Collections from "../_component/collections";
import { RenderMediaLibrary } from "../_component/media-library";
import NoCollection from "../_component/no-collection";

const BackgroundsPage = () => {
  const { collections: allCollection } = useMediaStore((state) => state);
  const specificCollections = allCollection.filter(
    (state) => state.type === "backgrounds",
  );
  return (
    <>
      <RenderMediaLibrary dataType="backgrounds">
        {specificCollections.length > 0 && (
          <Collections
            collections={specificCollections}
            dataType="backgrounds"
          />
        )}
        {specificCollections.length <= 0 && (
          <NoCollection dataType="backgrounds" />
        )}
      </RenderMediaLibrary>
    </>
  );
};

export default BackgroundsPage;
