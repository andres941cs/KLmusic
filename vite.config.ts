import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      "@services": path.resolve(__dirname, 'src/services'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@hooks": path.resolve(__dirname, 'src/hooks'),
      "@models": path.resolve(__dirname, 'src/models'),
      "@context": path.resolve(__dirname, 'src/context'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@store": path.resolve(__dirname, 'src/store'),
      // MODIFICAR TAMBIEN tsconfig.json
    },
  },
})
