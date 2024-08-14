/* eslint-disable no-console */
import axios, { AxiosError } from "axios";

export type PaginationRequest = {
  totalPages: number;
  totalCount: number;
  page: number;
  perPage: number;
};
const admin_base_url: string =
  process.env.API_URL || "https://api.staging.delve.fun";

export const getAuthToken = async () => {
  try {
    // return session?.access_token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllUsers = async (
  PaginationRequest: PaginationRequest,
  token: string | undefined,
) => {
  try {
    const response = await axios.get(`${admin_base_url}/api/v1/admin/users`, {
      params: {
        page: PaginationRequest.page,
        perPage: PaginationRequest.perPage,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//  Get all userStats
export const getUsersStats = async (token: string | undefined) => {
  try {
    const response = await axios.get(`${admin_base_url}/api/v1/statistics`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

// get user by status
export const getUserByStatus = async (
  booleanValue: boolean | undefined,
  token: string | undefined,
) => {
  try {
    const response = await axios.get(
      `${admin_base_url}/api/v1/admin/users?status=${booleanValue}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

// get user by date
export const getUsersByDate = async (
  created_at_from: Date | string,
  created_at_to: Date | string,
  token: string | undefined,
) => {
  try {
    const response = await axios.get(
      `${admin_base_url}/api/v1/admin/users?created_at_from=${created_at_from}&created_at_to=${created_at_to}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export users to csv

export const ExportUsers = async (token: string | undefined) => {
  try {
    const response = await axios.get(
      `${admin_base_url}/api/v1/admin/users/export`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// Retrieve A specific user
export const GetSingleUser = async (
  userId: string | string[] | undefined,
  token: string | undefined,
) => {
  try {
    const response = await axios.get(
      `${admin_base_url}/api/v1/admin/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// deactivate User
export const deactivateUser = async (
  userId: string,
  token: string | undefined,
) => {
  try {
    const response = await axios.patch(
      `${admin_base_url}/api/v1/admin/users/${userId}/deactivate`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response;
  } catch (error) {
    console.error("Error deactivating user:");
    throw error;
  }
};

// get admin profile
export const getAdminProfile = async (token: string | undefined) => {
  try {
    const response = await axios.get(`${admin_base_url}/api/v1/admin-profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
interface ProfileData {
  image: string;
  username: string;
  email: string;
  gender: string;
}

export const updateAdminProfile = async (
  profileData: ProfileData,
  token: string | undefined,
) => {
  try {
    const response = await axios.post(
      `${admin_base_url}/api/v1/admin-profile`,
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data?.data;
  } catch (error) {
    console.error(
      "Failed to update profile:",
      (error as AxiosError).response?.data || (error as Error).message,
    );

    throw error;
  }
};
