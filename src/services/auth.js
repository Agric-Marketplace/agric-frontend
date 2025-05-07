import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  return apiClient.post("/users/register", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiLogin = async (payload) =>
  apiClient.post("/users/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

/**
 * Verify a user’s email by token.
 * @param {string} token — the verification token from the URL
 * @returns {Promise<{ message: string }>}
 */
export function apiVerifyEmail(token) {
  return apiClient.get("/users/verify-email", {
    params: { token },
  });
}
