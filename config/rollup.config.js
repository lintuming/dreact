import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
export default [
  {
    input: "src/dreact.ts",
    plugins: [
      commonjs(),
      resolve({
        customResolveOptions: {
          moduleDirectory: "node_modules"
        }
      }),
      typescript()
    ],
    output: [
      {
        file: "./lib/index.js",
        format: "cjs",
      },
      {
        file: "./es/index.js",
        format: "es",
      }
    ]
  }
];
