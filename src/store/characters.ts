import { create } from "zustand";

interface Image {
  id: string;
  url: string;
}

interface Collection {
  id: string;
  title: string;
  images: Image[];
}

interface CharactersState {
  collections: Collection[];
  addCollection: (collection: Collection) => void;
  deleteCollection: (id: string) => void;
  editCollection: (id: string, updatedCollection: Collection) => void;
  clearAllCollections: () => void;
  addImageToCollection: (image: Image, collectionId?: string) => void;
  deleteImageFromCollection: (collectionId: string, imageId: string) => void;
}

const useCharactersStore = create<CharactersState>((set) => ({
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
          title: "Default Collection",
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

export default useCharactersStore;
