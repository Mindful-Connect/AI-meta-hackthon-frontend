import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/manifest.json",
          dest: ".",
        },
        {
          src: "src/assets/logo.png",
          dest: "assets",
        },
        {
          src: "src/assets/logo-with-effects.png",
          dest: "assets",
        },
        {
          src: "src/assets/avatar.png",
          dest: "assets",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
