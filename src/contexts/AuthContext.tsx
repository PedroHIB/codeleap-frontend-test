import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./auth.context";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(
    localStorage.getItem("username"),
  );

  function login(name: string) {
    localStorage.setItem("username", name);
    setUsername(name);
  }

  function logout() {
    localStorage.removeItem("username");
    setUsername(null);
  }

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
