/* eslint-disable no-console */
import axios from "axios";

import { auth } from "~/lib/auth";

const admin_base_url: string =
  process.env.API_URL || "https://api.staging.delve.fun";

export const getAllQuests = async () => {
  try {
    const session = await auth();

    const response = await axios.get(`${admin_base_url}/api/v1/quests`, {
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
export const getPreviewQuest = async (questId: string) => {
  try {
    const session = await auth();

    const response = await axios.get(
      `${admin_base_url}/api/v1/quests/${questId}`,
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
