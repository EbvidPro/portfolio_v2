import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "../theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="group fixed bottom-6 right-6 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-surface/80 text-ink shadow-soft ring-1 ring-ink/10 backdrop-blur-2xl transition-all duration-700 ease-fluid hover:-translate-y-1 hover:bg-accent hover:text-on-inverse hover:shadow-ambient active:scale-[0.96] md:bottom-8 md:right-8"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <Sun
          weight="light"
          size={22}
          className={`absolute transition-all duration-700 ease-fluid ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-50 opacity-0"
          }`}
        />
        <Moon
          weight="light"
          size={22}
          className={`absolute transition-all duration-700 ease-fluid ${
            isDark
              ? "-rotate-90 scale-50 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </span>
    </button>
  );
}
