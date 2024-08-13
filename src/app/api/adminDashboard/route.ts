/* eslint-disable no-console */
import axios from "axios";

export type PaginationRequest = {
  totalPages: number;
  totalCount: number;

  page: number;
  perPage: number;
};
export const ADMIN_BASE_URL = "https://api.staging.delve.fun";
export const getAuthToken = () => {
  const token = sessionStorage.getItem("accessToken");

  if (!token) {
    throw new Error("No access token found. Please log in.");
  }

  return token;
};

export const getAllUsers = async (PaginationRequest: PaginationRequest) => {
  try {
    const response = await axios.get(`${ADMIN_BASE_URL}/api/v1/users`, {
      params: {
        page: PaginationRequest.page,
        perPage: PaginationRequest.perPage,
      },
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
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
    const response = await axios.get(`${ADMIN_BASE_URL}/api/v1/statistics`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
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
    const response = await axios.get(
      `${ADMIN_BASE_URL}/api/v1/users?status=${booleanValue}`,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
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
    const response = await axios.get(
      `${ADMIN_BASE_URL}/api/v1/users?created_at_from=${created_at_from}&created_at_to=${created_at_to}`,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// get admin profile
export const getAdminProfile = async () => {
  try {
    const response = await axios.get(`${ADMIN_BASE_URL}/api/v1/admin-profile`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
