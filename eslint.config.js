import globals from "globals";
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default [
  {
    languageOptions: {
      parser: "@babel/eslint-parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-env"],
        },
      },
      globals: globals.node,
    },
    plugins: {
      js: pluginJs,
    },
    rules: {
    },
  },
  ...compat.extends("airbnb"),
];
