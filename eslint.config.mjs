import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});
const eslintConfig = [
  ...compat.config({
    extends: [
      "next",
      "next/typescript",
      "prettier",
      "plugin:prettier/recommended",
    ],
    plugins: ["simple-import-sort"],
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^next", "@tanstack/react-query"],
            [
              "^@?\\w",
              "^(api)(/.*|$)",
              "^(app)(/.*|$)",
              "^(components)(/.*|$)",
              "^(helpers)(/.*|$)",
              "^(utils)(/.*|$)",
              "^(constants)(/.*|$)",
            ],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$", "./style.scss"],
          ],
        },
      ],
    },
  }),
];
export default eslintConfig;
