import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("addis-user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  function login(phone) {
    const u = { phone };
    setUser(u);
    localStorage.setItem("addis-user", JSON.stringify(u));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("addis-user");
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}