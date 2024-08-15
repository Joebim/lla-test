import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

type State = {
  current_countdown: number;
  start_countdown: boolean;
  has_mission_started: boolean;

  updateHasMissionStarted: (state: boolean) => void;
  updateCountdown: (state: number) => void;
  updateStartCountdown: (state: boolean) => void;
};

const storage: PersistStorage<State> = {
  getItem: (name) => {
    const string_ = localStorage.getItem(name);
    if (!string_) return;
    return JSON.parse(string_);
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => localStorage.removeItem(name),
};

export const useQuestHook = create<State>()(
  persist(
    (set) => ({
      current_countdown: 0,
      start_countdown: false,
      has_mission_started: false,

      updateHasMissionStarted: (state) => set({ has_mission_started: state }),

      updateCountdown: (state) => set({ current_countdown: state }),
      updateStartCountdown: (state) => set({ start_countdown: state }),
    }),
    { name: "quest_hook", storage },
  ),
);
