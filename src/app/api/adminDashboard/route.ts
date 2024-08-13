/* eslint-disable no-console */
import axios, { AxiosError } from "axios";

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
    const response = await axios.get(`${ADMIN_BASE_URL}/api/v1/admin/users`, {
      params: {
        page: PaginationRequest.page,
        perPage: PaginationRequest.perPage,
      },
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU0NTc2NywiZXhwIjoxNzIzNTQ5MzY3LCJuYmYiOjE3MjM1NDU3NjcsImp0aSI6IlczbnE0S3BPY2NlSDlRNzQiLCJzdWIiOiI5Y2JmMzRmMS01ODM4LTRkMDgtYTc2ZC1lNjdhOTI3MjFkZjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.MhsomelL20SwZ5OpwWP2R3xShIFr6dxUlOstHy3WlmU`,
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
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU0NTc2NywiZXhwIjoxNzIzNTQ5MzY3LCJuYmYiOjE3MjM1NDU3NjcsImp0aSI6IlczbnE0S3BPY2NlSDlRNzQiLCJzdWIiOiI5Y2JmMzRmMS01ODM4LTRkMDgtYTc2ZC1lNjdhOTI3MjFkZjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.MhsomelL20SwZ5OpwWP2R3xShIFr6dxUlOstHy3WlmU`,
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
      `${ADMIN_BASE_URL}/api/v1/admin/users?status=${booleanValue}`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU0NTc2NywiZXhwIjoxNzIzNTQ5MzY3LCJuYmYiOjE3MjM1NDU3NjcsImp0aSI6IlczbnE0S3BPY2NlSDlRNzQiLCJzdWIiOiI5Y2JmMzRmMS01ODM4LTRkMDgtYTc2ZC1lNjdhOTI3MjFkZjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.MhsomelL20SwZ5OpwWP2R3xShIFr6dxUlOstHy3WlmU`,
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
      `${ADMIN_BASE_URL}/api/v1/admin/users?created_at_from=${created_at_from}&created_at_to=${created_at_to}`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU0NTc2NywiZXhwIjoxNzIzNTQ5MzY3LCJuYmYiOjE3MjM1NDU3NjcsImp0aSI6IlczbnE0S3BPY2NlSDlRNzQiLCJzdWIiOiI5Y2JmMzRmMS01ODM4LTRkMDgtYTc2ZC1lNjdhOTI3MjFkZjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.MhsomelL20SwZ5OpwWP2R3xShIFr6dxUlOstHy3WlmU`,
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
    const response = await axios.get(
      `${ADMIN_BASE_URL}/api/v1/admin/users/export`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU0NTc2NywiZXhwIjoxNzIzNTQ5MzY3LCJuYmYiOjE3MjM1NDU3NjcsImp0aSI6IlczbnE0S3BPY2NlSDlRNzQiLCJzdWIiOiI5Y2JmMzRmMS01ODM4LTRkMDgtYTc2ZC1lNjdhOTI3MjFkZjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.MhsomelL20SwZ5OpwWP2R3xShIFr6dxUlOstHy3WlmU`,
        },
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// Retrieve A specific user
export const GetSingleUser = async (userId: string) => {
  try {
    const response = await axios.get(
      `${ADMIN_BASE_URL}/api/v1/admin/users/${userId}`,
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
// deactivate User
export const deactivateUser = async (userId: string) => {
  try {
    const response = await axios.patch(
      `${ADMIN_BASE_URL}/api/v1/admin/users/${userId}/deactivate`,
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
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzUzODkzMiwiZXhwIjoxNzIzNTQyNTMyLCJuYmYiOjE3MjM1Mzg5MzIsImp0aSI6ImxCdzdOOWU0V0l6NVdhY3QiLCJzdWIiOiI5Y2JmMzRmMS01ODM4LTRkMDgtYTc2ZC1lNjdhOTI3MjFkZjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.oMXOfkiQrZOQfYoevbhNYiwlkM54G4vdiqDCzCnrttM`,
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
    console.log("Sending profile data:", profileData);
    const response = await axios.post(
      `${ADMIN_BASE_URL}/api/v1/admin-profile`,
      profileData,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzUzODkzMiwiZXhwIjoxNzIzNTQyNTMyLCJuYmYiOjE3MjM1Mzg5MzIsImp0aSI6ImxCdzdOOWU0V0l6NVdhY3QiLCJzdWIiOiI5Y2JmMzRmMS01ODM4LTRkMDgtYTc2ZC1lNjdhOTI3MjFkZjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.oMXOfkiQrZOQfYoevbhNYiwlkM54G4vdiqDCzCnrttM`,
          "Content-Type": "application/json",
        },
      },
    );
    console.log("Profile updated successfully:", response.data);
    return response.data?.data;
  } catch (error) {
    console.error(
      "Failed to update profile:",
      (error as AxiosError).response?.data || (error as Error).message,
    );

    throw error;
  }
};
