import globals from "globals";
import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  },
  {
    languageOptions: { globals: globals.node }
  },
  js.configs.recommended,
  {
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "space-before-function-paren": ["error", "never"],
      "comma-dangle": ["error", "never"],
      "curly": ["error", "all"]
    }
  }
];
