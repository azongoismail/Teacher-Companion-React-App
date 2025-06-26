import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  server:{
    port: 3000,
  },
  theme: {
    extend:{
      fontFamily:{
        sans: ['"Open Sans"', 'sans-serif'],
        roboto:['"Roboto"', 'sans-serif'],

      }

    },
  },
})