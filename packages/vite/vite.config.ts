import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const indexDir = resolve(__dirname, "src");

export default defineConfig(() => {
  return {
    plugins: [dts({
      entryRoot: indexDir,
    })],
    build: {
      minify: false,
      lib: {
        entry: resolve(indexDir, "index.ts"),
        formats: ["es", "cjs"],
        fileName: (module, entry) => `${entry}.${module === "es" ? "mjs" : module}`,
      },
    },
  };
});
