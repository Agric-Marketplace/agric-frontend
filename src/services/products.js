import { apiClient } from "./config";

export const apiAddAdvert = async (payload) => {
  return apiClient.post("/products", payload, {
    withCredentials: true, // Include credentials (cookies) with the request
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const apiGetAllAdverts = async () => {
  try {
    const response = await apiClient.get("/products", {
      withCredentials: true, // Include credentials if needed
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response ? error.response.data : error.message
    );
  }
};
