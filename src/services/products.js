import { apiClient } from "./config";

export const apiAddAdvert = async (payload) => {
  return apiClient.post("/products", payload, {
    withCredentials: true, // Include credentials (cookies) with the request
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

export const apiGetVendorAdverts = async () => {
  return apiClient.get("/products/vendor", {
    withCredentials: true, 
  });
};

export const apiDeleteAdvert = async (id) => {
  return apiClient.delete(`/products/vendor/${id}`, {
    withCredentials: true,
  });
};

export const apiGetVendorAdvertById = async (id) => {
  return apiClient.get(`/products/vendor/${id}`, {
    withCredentials: true,
  });
};

export const apiUpdateAdvert = async (id, payload) => {
  // This sends standard JSON for the text fields
  return apiClient.put(`/products/vendor/${id}`, payload, {
    withCredentials: true,
  });
};

export const apiUpdateAdvertImage = async (id, formData) => {
  // This sends multipart/form-data for the new image
  return apiClient.patch(`/products/vendor/${id}`, formData, {
    withCredentials: true,
  });
};

export const apiGetProductById = async (id) => {
  return apiClient.get(`/products/${id}`);
};
