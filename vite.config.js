import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // نام مخزن خود را اینجا بنویسید است
  build: {
    outDir: 'docs' // خروجی build را در پوشه‌ی docs قرار بده
  }
})
