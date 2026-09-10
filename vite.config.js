import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// Use relative asset paths so the app works on GitHub Pages project URLs.
	base: './',
});
