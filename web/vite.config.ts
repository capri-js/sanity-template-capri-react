import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import capri from "@capri-js/react/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    capri({
      spa: "/preview",
    }),
  ],
});
