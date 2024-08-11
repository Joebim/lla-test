export type CollectionDataType =
  | "backgrounds"
  | "animations"
  | "characters"
  | "objects";

interface Image {
  id: string;
  url: string;
}

export interface CollectionType {
  id: string;
  type: CollectionDataType;
  title: string;
  images: Image[];
}

export interface MediaState {
  collections: CollectionType[];
  addCollection: (collection: CollectionType) => void;
  deleteCollection: (id: string) => void;
  editCollection: (id: string, updatedCollection: CollectionType) => void;
  clearAllCollections: () => void;
  addImageToCollection: (image: Image, collectionId?: string) => void;
  deleteImageFromCollection: (collectionId: string, imageId: string) => void;
}
