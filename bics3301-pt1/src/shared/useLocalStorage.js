// useLocalStorage: works like useState, but the value is also saved in the
// browser's localStorage, so it is still there after a page refresh.
// Provided for you (same as the CampusEats Week 4 hook). You do not need to change it.
import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  // The arrow function runs only on the first render: read the saved value once.
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  // Every time the value changes, write it back (as text, because localStorage only stores text).
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage full or blocked (e.g. private window): keep working in memory.
    }
  }, [key, value])

  // Same shape as useState: [current value, function to change it].
  return [value, setValue]
}
