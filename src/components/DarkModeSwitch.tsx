"use client";

import { useTheme } from "next-themes";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && (
        <div className="cursor-pointer text-2xl hover:text-amber-400">
          {currentTheme === "dark" ? (
            <MdLightMode onClick={() => setTheme("light")} />
          ) : (
            <MdDarkMode onClick={() => setTheme("dark")} />
          )}
        </div>
      )}
    </>
  );
}
