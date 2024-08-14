import axios from "axios";

import { auth } from "~/lib/auth";

const admin_base_url: string =
  process.env.API_URL || "https://api.staging.delve.fun";

interface createProperties {
  question: string;
  answer: string;
  category: string;
}

interface UpdateProperties {
  question: string;
  answer: string;
  category: string;
}

//fetch faqs
const getFAQs = async () => {
  try {
    const response = await axios.get(`${admin_base_url}/api/v1/faqs`);

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Unable to Fetch FAQS",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

// create faq
const CreateFaqs = async (payload: createProperties) => {
  try {
    const session = await auth();

    const response = await axios.post(
      `${admin_base_url}/api/v1/faqs`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Unable to Create FAQ",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
//delete faq
const DeleteFaqs = async (id: string) => {
  try {
    const session = await auth();

    const response = await axios.delete(`${admin_base_url}/api/v1/faqs/${id}`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });
    return {
      message: response.data.message,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Unable to Delete FAQ",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
//update faq
const UpdateFaqs = async (payload: UpdateProperties, id: string) => {
  try {
    const session = await auth();

    const response = await axios.put(
      `${admin_base_url}/api/v1/faqs/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Unable to Update FAQ",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export { CreateFaqs, DeleteFaqs, UpdateFaqs, getFAQs };
