import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseURL,
});

apiClient.interceptors.request.use((config) => {
  //Get access token from localStorage
  const token = localStorage.getItem("token");
  //Attach token to Authorization header
  config.headers.Authorization = `Bearer ${token}`;
  console.log("Outgoing request config:", config);

  //Return config
  return config;
});

// ATTACHES THE LOCAL STORAGE TOKEN
apiClient.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   // Only attach token if the request needs auth (optional logic)
//   const isProtectedRoute = !["/products"].includes(config.url); // adjust as needed

//   if (token && isProtectedRoute) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });
