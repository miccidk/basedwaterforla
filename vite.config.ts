import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	build: {
		outDir: 'docs',
		// Optionally, if you want to clean the output directory before building:
		emptyOutDir: true
	}
})
