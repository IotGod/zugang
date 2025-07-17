import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/token': 'http://localhost:8000',
      '/users': 'http://localhost:8000',
      '/event': 'http://localhost:8000'
    }
  }
});
