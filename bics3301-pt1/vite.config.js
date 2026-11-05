import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite settings: only the React plugin is needed for this test.
export default defineConfig({
  plugins: [react()],
})
