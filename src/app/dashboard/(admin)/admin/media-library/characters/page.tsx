"use client";

import useMediaStore from "~/store/media-library-store";
import Collections from "../_component/collections";
import { RenderMediaLibrary } from "../_component/media-library";
import NoCollection from "../_component/no-collection";

const CharacterPage = () => {
  const { collections: allCollection } = useMediaStore((state) => state);
  const specificCollections = allCollection.filter(
    (state) => state.type === "characters",
  );
  return (
    <>
      <RenderMediaLibrary dataType="characters">
        {specificCollections.length > 0 && (
          <Collections
            collections={specificCollections}
            dataType="characters"
          />
        )}
        {specificCollections.length <= 0 && (
          <NoCollection dataType="characters" />
        )}
      </RenderMediaLibrary>
    </>
  );
};

export default CharacterPage;
