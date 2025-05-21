import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de red
    port: 3000,
    strictPort: true,
    // Opcional: Configura proxy para API si es necesario
  }
})