import axios from "axios";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

import { clientSession } from "~/lib/session";
import { IAudioSettings, IAudioSettingsResponse } from "~/types/settings.model";

export const apiClient = axios.create({
  baseURL: "https://api.staging.delve.fun/api/v1",
  headers: {
    Accept: "application/json",
  },
});

export const audioSettings = async () => {
  try {
    const response = await apiClient.get(`/audio-settings/update`);
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Registration failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: undefined,
  errorData: {
    error: "",
  },
  initialData: undefined,
};

type IUpdateAudioProperties = {
  loading: boolean;
  success: boolean;
  data: undefined | IAudioSettingsResponse;
  error: boolean;
  errorData: { error: undefined; status: number } | { error: string };
  updateAudioSettings: (audioSetting: IAudioSettings) => Promise<void>;
  getAudioSettings: () => Promise<void>;
};

const storage: PersistStorage<IUpdateAudioProperties> = {
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

export const useAudioSettings = create<IUpdateAudioProperties>()(
  persist(
    (set) => ({
      ...initialState,
      updateAudioSettings: async (audioSetting: IAudioSettings) => {
        const session = await clientSession();
        set({ ...initialState, loading: true });
        try {
          const response = await apiClient.put(
            `/audio-settings`,
            audioSetting,
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session?.access_token}`,
              },
            },
          );
          set({
            ...initialState,
            success: true,
            data: response.data,
            loading: false,
          });
        } catch (error) {
          set({
            ...initialState,
            success: false,
            error: true,
            loading: false,
            errorData:
              axios.isAxiosError(error) && error.response
                ? {
                    error:
                      error.response.data.message || "Registration failed.",
                    status: error.response.status,
                  }
                : {
                    error: "An unexpected error occurred.",
                  },
          });
        }
      },
      getAudioSettings: async () => {
        const session = await clientSession();
        set({ ...initialState, loading: true });
        try {
          const response = await apiClient.get(`/audio-settings`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${session?.access_token}`,
            },
          });
          set({
            ...initialState,
            success: true,
            data: response.data,
            loading: false,
          });
        } catch (error) {
          set({
            ...initialState,
            success: false,
            error: true,
            loading: false,
            errorData:
              axios.isAxiosError(error) && error.response
                ? {
                    error:
                      error.response.data.message || "Registration failed.",
                    status: error.response.status,
                  }
                : {
                    error: "An unexpected error occurred.",
                  },
          });
        }
      },
    }),
    {
      name: "audio-settings",
      storage,
    },
  ),
);
