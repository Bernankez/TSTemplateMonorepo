import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  format: ["cjs", "esm"],
  shims: true,
  dts: true,
  target: ["es2020"],
  outExtension({ format }) {
    return {
      js: `.${format === "esm" ? "mjs" : format}`,
    };
  },
});
