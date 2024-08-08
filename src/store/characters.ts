import { create } from "zustand";

interface Character {
  id: string;
  image: string;
}

interface CharactersState {
  characters: Character[];
  addCharacter: (character: Character) => void;
  deleteCharacter: (id: string) => void;
  editCharacter: (id: string, updatedCharacter: Character) => void;
  clearAllCharacters: () => void;
}

const useCharactersStore = create<CharactersState>((set) => ({
  characters: [],
  addCharacter: (character) =>
    set((state) => ({ characters: [...state.characters, character] })),
  deleteCharacter: (id) =>
    set((state) => ({
      characters: state.characters.filter((character) => character.id !== id),
    })),
  editCharacter: (id, updatedCharacter) =>
    set((state) => ({
      characters: state.characters.map((character) =>
        character.id === id ? updatedCharacter : character,
      ),
    })),
  clearAllCharacters: () => set({ characters: [] }),
}));

export default useCharactersStore;
