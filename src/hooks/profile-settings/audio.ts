import axios from "axios";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

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
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzYxOTA5OCwiZXhwIjoxNzIzNjIyNjk4LCJuYmYiOjE3MjM2MTkwOTgsImp0aSI6InAxN2d6WE9aeVN3cmJjenkiLCJzdWIiOiI5Y2MzMjI1ZS05NzQ3LTQxNDEtYjhmOS0wOGMwMjFlOWEzYTEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.q2-aqSzZ95poDzcpFSS_Llkvmh2KU26r-MAAJPZQNoA";
        set({ ...initialState, loading: true });
        try {
          const response = await apiClient.put(
            `/audio-settings`,
            audioSetting,
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
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
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU2NTU5MCwiZXhwIjoxNzIzNTY5MTkwLCJuYmYiOjE3MjM1NjU1OTAsImp0aSI6ImhhWEhzaEdBWnVQTXcya1EiLCJzdWIiOiI5Y2MxYzUwNC0wOThmLTQxMGQtOGE2YS0zOGQxNzU3MzBjMmUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.C65RMgZH8dr_K2A_yTKrkDO_GexS4j3kDWuBgg1UYR8";
        set({ ...initialState, loading: true });
        try {
          const response = await apiClient.get(`/audio-settings`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
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
