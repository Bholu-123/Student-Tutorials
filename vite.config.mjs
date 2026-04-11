import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3001,
    open: true,
    /**
     * Vite does not run Vercel serverless files. POST /api/submit-enquiry would 404 unless
     * you either: (1) run `vercel dev` (default http://127.0.0.1:3000) alongside this dev
     * server, or (2) set VITE_ENQUIRY_API_URL to your deployed API origin.
     */
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
    },
  },
});
