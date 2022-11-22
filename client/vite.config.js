import { defineConfig } from "vite";

export default defineConfig({
  server: {
    strictPort: true,
    port: 3000,
    host: "0.0.0.0",
  },
});
