import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/products", payload);
