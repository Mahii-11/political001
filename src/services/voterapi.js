import axios from "axios";

const API_BASE_URL = "https://election-backend.dotzpos.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

export const getWards = async () => {
  try {
    const response = await api.get("/ward-list");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching ward list:", {
      message: error.message,
      status: error?.response?.status,
      data: error?.response?.data,
    });
    throw error;
  }
};

export const getVoters = async (params) => {
  try {
    const response = await api.get("/voter-list", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching voter list:", {
      message: error.message,
      status: error?.response?.status,
      data: error?.response?.data,
      params,
    });
    throw error;
  }
};
