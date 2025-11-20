import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
