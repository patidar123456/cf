import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Check if the access token is already in local storage
    const storedAccessToken = localStorage.getItem("AccessToken");
    if (storedAccessToken !== null && storedAccessToken !== undefined && storedAccessToken.trim() !== '') {
      setAccessToken(storedAccessToken);
    }
  }, []);

  const login = (token) => {
    setAccessToken(token);
    localStorage.setItem("AccessToken", token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("AccessToken");
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
