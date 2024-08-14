/* eslint-disable no-console */
import axios from "axios";

const admin_base_url: string =
  process.env.API_URL || "https://api.staging.delve.fun";

export const getAllQuests = async (token: string | undefined) => {
  try {
    const response = await axios.get(`${admin_base_url}/api/v1/quests`, {
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
export const getPreviewQuest = async (
  questId: string,
  token: string | undefined,
) => {
  try {
    const response = await axios.get(
      `${admin_base_url}/api/v1/quests/${questId}`,
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
