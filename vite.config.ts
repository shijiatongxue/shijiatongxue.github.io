import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { splitVendorChunkPlugin } from "vite";

const isProd = process.env.NODE_ENV === "production";
const cdn = "https://site-1307850796.cos.ap-beijing.myqcloud.com";

// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? cdn : "/",
  build: {
    outDir: "docs",
  },
  plugins: [splitVendorChunkPlugin(), react()],
});
