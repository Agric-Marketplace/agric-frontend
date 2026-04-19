import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check storage when the app first loads
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      
      if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
        const parsedUser = JSON.parse(storedUser);
        if (typeof parsedUser === "object" && parsedUser !== null && !Array.isArray(parsedUser)){
        setUser(parsedUser);
        } else{
          localStorage.removeItem("user");
          setUser(null);  
        }
      } else {
        localStorage.removeItem("user"); 
      }
    } catch (error) {
      console.error("Found corrupted storage. Cleaning it up...");
      localStorage.removeItem("user");
    }
  }, []);


  // Use this function when someone logs in
  const loginAction = (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
  };

  // Use this function when someone logs out
  const logoutAction = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginAction, logoutAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
