"use client"

import { useAppContext } from "@/contexts/app-context";

export default function Home() {
  const { theme, setTheme } = useAppContext();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <main>
      <h1>Theme: {theme}</h1>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </main>
  );
}
