import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    base:"gp-demo",
    plugins: [vue()],
  };
});
  