import { create } from "zustand";

interface ProfileState {
  image: string;
  name: string;
  email: string;
  gender: string;
  updateProfile: (profile: Partial<ProfileState>) => void;
}

const loadProfileFromLocalStorage = (): Partial<ProfileState> => {
  if (typeof window !== "undefined") {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      return JSON.parse(storedProfile);
    }
  }
  return {};
};

export const useProfileStore = create<ProfileState>((set) => ({
  image: "",
  name: "John Doe",
  email: "johndoe@gmail.com",
  gender: "Male",
  ...loadProfileFromLocalStorage(),
  updateProfile: (profile) => {
    set((state) => {
      const updatedProfile = { ...state, ...profile };
      localStorage.setItem("profile", JSON.stringify(updatedProfile));
      return updatedProfile;
    });
  },
}));
