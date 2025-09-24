import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  // use SWC for faster builds

export default defineConfig({
  plugins: [react()],
  base: "/movie-app-2025/"  // ✅ correct location for GitHub Pages
})
