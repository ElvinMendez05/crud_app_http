import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/users': {
                target: 'http://localhost:3001/', // Cambia esto a la URL de tu API
                changeOrigin: true, // Cambia el origen de la solicitud
                rewrite: (path) => path.replace(/^\/users/, '/users'), // Esto asegura que el path sea correcto
            },
        },
    },
});