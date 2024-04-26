"use client"

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type Theme = "light" | "dark";

type AppContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const value = {theme, setTheme};

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw Error("useAppContext must wrapped with in AppContextProvider");
  }

  return context;
}
