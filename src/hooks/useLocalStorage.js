import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  // Lazy initializer reads from localStorage once on load
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch (e) {
      console.error("Error reading localStorage key:", key, e);
      return initialValue;
    }
  });

  // Saves changes back to localStorage automatically
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Error setting localStorage key:", key, e);
    }
  }, [key, value]);

  return [value, setValue];
}
