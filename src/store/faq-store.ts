// import axios from "axios";
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
  fetchFAQs: () => Promise<void>;
  deleteFAQ: (id: string) => Promise<void>;
  addFAQ: (faq: Omit<FAQ, "id">) => Promise<void>;
  updateFAQ: (id: string, updatedFAQ: Omit<FAQ, "id">) => Promise<void>;
}

export const useFAQStore = create<FAQStore>((set) => ({
  faqs: [],
  fetchSuccess: false,
  addSuccess: false,
  updateSuccess: false,
  deleteSuccess: false,
  fetchFAQs: async () => {
    try {
      const response = await axios.get(
        "https://staging.api-php.boilerplate.hng.tech/api/v1/faqs",
      );
      set({ faqs: response.data, fetchSuccess: true });
    } catch {
      set({ fetchSuccess: false });
    }
  },

  addFAQ: async (faq) => {
    try {
      const response = await axios.post(
        "https://staging.api-php.boilerplate.hng.tech/api/v1/faqs",
        faq,
      );
      set((state) => ({
        faqs: [...state.faqs, response.data],
        addSuccess: true,
      }));
    } catch {
      set({ addSuccess: false });
    }
  },

  updateFAQ: async (id, updatedFAQ) => {
    try {
      const response = await axios.put(`/api/faqs/${id}`, updatedFAQ);
      set((state) => ({
        faqs: state.faqs.map((faq) => (faq.id === id ? response.data : faq)),
        updateSuccess: true,
      }));
    } catch {
      set({ updateSuccess: false });
    }
  },

  deleteFAQ: async (id) => {
    try {
      await axios.delete(`/api/faqs/${id}`);
      set((state) => ({
        faqs: state.faqs.filter((faq) => faq.id !== id),
        deleteSuccess: true,
      }));
    } catch {
      set({ deleteSuccess: false });
    }
  },
}));
