import Ts from "rollup-plugin-typescript2";

export default {
  input: [
    "src/index.ts",
    "src/components/button/index.ts",
  ],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Ts()],
};
