import { create } from "zustand";

import { MediaState } from "~/config/types";

const useMediaStore = create<MediaState>((set) => ({
  collections: [],
  addCollection: (collection) =>
    set((state) => ({ collections: [...state.collections, collection] })),
  deleteCollection: (id) =>
    set((state) => ({
      collections: state.collections.filter(
        (collection) => collection.id !== id,
      ),
    })),
  editCollection: (id, updatedCollection) =>
    set((state) => ({
      collections: state.collections.map((collection) =>
        collection.id === id ? updatedCollection : collection,
      ),
    })),
  clearAllCollections: () => set({ collections: [] }),
  addImageToCollection: (image, collectionId = "default") =>
    set((state) => {
      const collectionsCopy = [...state.collections];
      const collectionIndex = collectionsCopy.findIndex(
        (c) => c.id === collectionId,
      );
      if (collectionIndex === -1) {
        collectionsCopy.push({
          id: collectionId,
          type: "backgrounds",
          title: "Collection 01",
          images: [image],
        });
      } else {
        collectionsCopy[collectionIndex].images.push(image);
      }
      return { collections: collectionsCopy };
    }),
  deleteImageFromCollection: (collectionId, imageId) =>
    set((state) => ({
      collections: state.collections.map((collection) =>
        collection.id === collectionId
          ? {
              ...collection,
              images: collection.images.filter((image) => image.id !== imageId),
            }
          : collection,
      ),
    })),
}));

export default useMediaStore;
