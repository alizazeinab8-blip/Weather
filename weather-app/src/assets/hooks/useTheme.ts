import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
  setTheme((prev) => {
    const newTheme = prev === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );

    return newTheme;
  });
};

  return {
    theme,
    toggleTheme,
  };
};