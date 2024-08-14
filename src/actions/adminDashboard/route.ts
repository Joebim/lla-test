/* eslint-disable no-console */
import axios, { AxiosError } from "axios";

import { PaginationRequest } from "~/app/dashboard/(admin)/admin/(overview)/adminDashboardTypes";
import { auth } from "~/lib/auth";

const admin_base_url: string =
  process.env.API_URL || "https://api.staging.delve.fun";

export const getAllUsers = async (PaginationRequest: PaginationRequest) => {
  try {
    const session = await auth();

    const response = await axios.get(`${admin_base_url}/api/v1/admin/users`, {
      params: {
        page: PaginationRequest.page,
        perPage: PaginationRequest.perPage,
      },
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//  Get all userStats
export const getUsersStats = async () => {
  try {
    const session = await auth();

    const response = await axios.get(`${admin_base_url}/api/v1/statistics`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

// get user by status
export const getUserByStatus = async (booleanValue: boolean | undefined) => {
  try {
    const session = await auth();

    const response = await axios.get(
      `${admin_base_url}/api/v1/admin/users?status=${booleanValue}`,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
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
) => {
  try {
    const session = await auth();

    const response = await axios.get(
      `${admin_base_url}/api/v1/admin/users?created_at_from=${created_at_from}&created_at_to=${created_at_to}`,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
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

export const ExportUsers = async () => {
  try {
    const session = await auth();

    const response = await axios.get(
      `${admin_base_url}/api/v1/admin/users/export`,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
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
export const GetSingleUser = async (userId: string | string[] | undefined) => {
  try {
    const session = await auth();

    const response = await axios.get(
      `${admin_base_url}/api/v1/admin/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
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
export const deactivateUser = async (userId: string) => {
  try {
    const session = await auth();

    const response = await axios.patch(
      `${admin_base_url}/api/v1/admin/users/${userId}/deactivate`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

    return response;
  } catch (error) {
    console.error("Error deactivating user:");
    throw error;
  }
};
// reactivate User
export const reactivateUser = async (userId: string) => {
  try {
    const session = await auth();

    const response = await axios.patch(
      `${admin_base_url}/api/v1/admin/users/${userId}/reactivate`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
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
export const getAdminProfile = async () => {
  try {
    const session = await auth();

    const response = await axios.get(`${admin_base_url}/api/v1/admin-profile`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
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

export const updateAdminProfile = async (profileData: ProfileData) => {
  try {
    const session = await auth();

    const response = await axios.post(
      `${admin_base_url}/api/v1/admin-profile`,
      profileData,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
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
