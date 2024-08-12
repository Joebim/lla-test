import axios from "axios";
import { create } from "zustand";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQStore {
  faqs: FAQ[];
  addSuccess: boolean;
  fetchSuccess: boolean;
  updateSuccess: boolean;
  deleteSuccess: boolean;
  isAdding: boolean;
  isUpdating: boolean;
  isDeleting: boolean;
  isFetching: boolean;
  fetchFAQs: () => Promise<void>;
  deleteFAQ: (id: string) => Promise<void>;
  addFAQ: (question: string, answer: string) => Promise<void>;
  updateFAQ: (id: string, updatedFAQ: Omit<FAQ, "id">) => Promise<void>;
}

export const useFAQStore = create<FAQStore>((set) => ({
  faqs: [],
  fetchSuccess: false,
  addSuccess: false,
  updateSuccess: false,
  deleteSuccess: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  isFetching: false,
  fetchFAQs: async () => {
    set({ isFetching: true });
    try {
      const response = await axios.get(
        "https://api.staging.delve.fun/api/v1/faqs",
      );
      set({ faqs: response.data.data, fetchSuccess: true, isFetching: false });
    } catch {
      set({ fetchSuccess: false });
    }
  },

  addFAQ: async (question, answer) => {
    set({ isAdding: true });
    try {
      const response = await axios.post(
        "https://api.staging.delve.fun/api/v1/faqs",
        { question, answer },
      );
      set((state) => ({
        faqs: [...state.faqs, response.data],
        addSuccess: true,
        isAdding: false,
      }));
    } catch {
      set({ addSuccess: false });
    }
  },

  updateFAQ: async (id, updatedFAQ) => {
    set({ isUpdating: true });
    try {
      const response = await axios.put(`/api/faqs/${id}`, updatedFAQ);
      set((state) => ({
        faqs: state.faqs.map((faq) => (faq.id === id ? response.data : faq)),
        updateSuccess: true,
        isUpdating: false,
      }));
    } catch {
      set({ updateSuccess: false });
    }
  },

  deleteFAQ: async (id) => {
    set({ isDeleting: true });
    try {
      await axios.delete(
        `https://staging.api-php.boilerplate.hng.tech/api/v1/faqs${id}`,
      );
      set((state) => ({
        faqs: state.faqs.filter((faq) => faq.id !== id),
        deleteSuccess: true,
        isDeleting: false,
      }));
    } catch {
      set({ deleteSuccess: false });
    }
  },
}));
