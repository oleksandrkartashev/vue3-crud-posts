import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import stylelint from "vite-plugin-stylelint";
import eslintPlugin from "vite-plugin-eslint";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    stylelint({
      fix: true,
      cache: false,
    }),
    svgLoader(),
  ],
  base: "/",
  server: {
    port: 8000,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    ],
  },
});
