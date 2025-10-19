import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga el archivo .env en el directorio de trabajo actual
  // El tercer parámetro '' carga todas las variables de entorno, sin importar el prefijo VITE_
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Vite reemplaza esta variable en tiempo de compilación por el valor real
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY),
    },
  };
});
