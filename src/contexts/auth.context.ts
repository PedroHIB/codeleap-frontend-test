import { createContext } from "react";

export type AuthContextData = {
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextData | null>(null);
