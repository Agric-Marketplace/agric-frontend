import { apiClient } from "./config"; 

export const apiGetCart = async () => {
  return apiClient.get("/user/carts", { withCredentials: true });
};

// Requires the product ID in the URL, and quantity in the body
export const apiAddToCart = async (productId, quantity = 1) => {
  return apiClient.post(`/user/cart/${productId}`, { quantity }, { withCredentials: true });
};

export const apiUpdateCartItem = async (productId, quantity) => {
  return apiClient.patch(`/user/cart/${productId}`, { quantity }, { withCredentials: true });
};

export const apiRemoveFromCart = async (productId) => {
  return apiClient.delete(`/user/cart/${productId}`, { withCredentials: true });
};
