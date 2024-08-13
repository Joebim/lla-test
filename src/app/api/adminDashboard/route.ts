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

export const getAuthToken = () => {
  const token = sessionStorage.getItem("accessToken");

  if (!token) {
    throw new Error("No access token found. Please log in.");
  }

  return token;
};

export const getAllUsers = async (PaginationRequest: PaginationRequest) => {
  try {
    const response = await axios.get(`${admin_base_url}/api/v1/admin/users`, {
      params: {
        page: PaginationRequest.page,
        perPage: PaginationRequest.perPage,
      },
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU1NTE1MiwiZXhwIjoxNzIzNTU4NzUyLCJuYmYiOjE3MjM1NTUxNTIsImp0aSI6IjFadkNZNDJlNlAxY2JIcUwiLCJzdWIiOiJkZjlhOTFjMi1iNGI4LTQ1NjgtOTdhYi02ODc1YWRlZTVmNGYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zVBwdLveQzZKM3U6SxF81F0ZOkEx170SE6wEeXjkuow`,
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
    const response = await axios.get(`${admin_base_url}/api/v1/statistics`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU1NTE1MiwiZXhwIjoxNzIzNTU4NzUyLCJuYmYiOjE3MjM1NTUxNTIsImp0aSI6IjFadkNZNDJlNlAxY2JIcUwiLCJzdWIiOiJkZjlhOTFjMi1iNGI4LTQ1NjgtOTdhYi02ODc1YWRlZTVmNGYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zVBwdLveQzZKM3U6SxF81F0ZOkEx170SE6wEeXjkuow`,
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
      `${admin_base_url}/api/v1/admin/users?status=${booleanValue}`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU1NTE1MiwiZXhwIjoxNzIzNTU4NzUyLCJuYmYiOjE3MjM1NTUxNTIsImp0aSI6IjFadkNZNDJlNlAxY2JIcUwiLCJzdWIiOiJkZjlhOTFjMi1iNGI4LTQ1NjgtOTdhYi02ODc1YWRlZTVmNGYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zVBwdLveQzZKM3U6SxF81F0ZOkEx170SE6wEeXjkuow`,
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
      `${admin_base_url}/api/v1/admin/users?created_at_from=${created_at_from}&created_at_to=${created_at_to}`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU1NTE1MiwiZXhwIjoxNzIzNTU4NzUyLCJuYmYiOjE3MjM1NTUxNTIsImp0aSI6IjFadkNZNDJlNlAxY2JIcUwiLCJzdWIiOiJkZjlhOTFjMi1iNGI4LTQ1NjgtOTdhYi02ODc1YWRlZTVmNGYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zVBwdLveQzZKM3U6SxF81F0ZOkEx170SE6wEeXjkuow`,
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
      `${admin_base_url}/api/v1/admin/users/export`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU1NTE1MiwiZXhwIjoxNzIzNTU4NzUyLCJuYmYiOjE3MjM1NTUxNTIsImp0aSI6IjFadkNZNDJlNlAxY2JIcUwiLCJzdWIiOiJkZjlhOTFjMi1iNGI4LTQ1NjgtOTdhYi02ODc1YWRlZTVmNGYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zVBwdLveQzZKM3U6SxF81F0ZOkEx170SE6wEeXjkuow`,
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
    const response = await axios.get(
      `${admin_base_url}/api/v1/admin/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU1ODg1MywiZXhwIjoxNzIzNTYyNDUzLCJuYmYiOjE3MjM1NTg4NTMsImp0aSI6InlWZHRQWlZnN2E3dXVWRUsiLCJzdWIiOiJkZjlhOTFjMi1iNGI4LTQ1NjgtOTdhYi02ODc1YWRlZTVmNGYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.IQZx5jIx6IJG0fD8IT-dY2ywDLhR-y_2UxhLGkB1X8o`,
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
      `${admin_base_url}/api/v1/admin/users/${userId}/deactivate`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU1NTE1MiwiZXhwIjoxNzIzNTU4NzUyLCJuYmYiOjE3MjM1NTUxNTIsImp0aSI6IjFadkNZNDJlNlAxY2JIcUwiLCJzdWIiOiJkZjlhOTFjMi1iNGI4LTQ1NjgtOTdhYi02ODc1YWRlZTVmNGYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zVBwdLveQzZKM3U6SxF81F0ZOkEx170SE6wEeXjkuow`,
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
    const response = await axios.get(`${admin_base_url}/api/v1/admin-profile`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU1NTE1MiwiZXhwIjoxNzIzNTU4NzUyLCJuYmYiOjE3MjM1NTUxNTIsImp0aSI6IjFadkNZNDJlNlAxY2JIcUwiLCJzdWIiOiJkZjlhOTFjMi1iNGI4LTQ1NjgtOTdhYi02ODc1YWRlZTVmNGYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zVBwdLveQzZKM3U6SxF81F0ZOkEx170SE6wEeXjkuow`,
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
      `${admin_base_url}/api/v1/admin-profile`,
      profileData,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbHZlLmZ1bi9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTcyMzU1NTE1MiwiZXhwIjoxNzIzNTU4NzUyLCJuYmYiOjE3MjM1NTUxNTIsImp0aSI6IjFadkNZNDJlNlAxY2JIcUwiLCJzdWIiOiJkZjlhOTFjMi1iNGI4LTQ1NjgtOTdhYi02ODc1YWRlZTVmNGYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zVBwdLveQzZKM3U6SxF81F0ZOkEx170SE6wEeXjkuow`,
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
