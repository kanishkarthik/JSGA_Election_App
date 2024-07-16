import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/school-election/',
  define : {
    'process.env': process.env
  },
  build : {
    // outDir: process.env.VITE_OUT_DIR || 'dist',
    // outDir : 'D:\\JSG_School\\Projects\\PackageToSchool\\13-07-2024\\school-election',
    outDir : 'C:\\xampp\\htdocs\\school-election',
    emptyOutDir : false  
  }
})
