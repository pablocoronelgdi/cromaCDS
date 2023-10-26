import Ts from "rollup-plugin-typescript2";

export default {
  input: [
    "src/index.ts",
    "src/components/text/index.ts",
    "src/components/themeWrapper/index.ts",
  ],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Ts()],
};
