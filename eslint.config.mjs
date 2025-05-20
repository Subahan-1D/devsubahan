import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // TypeScript Rules
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "warn", // can be "off" if needed
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // React & JSX
      "react/react-in-jsx-scope": "off", // Not needed in Next.js with React 17+
      "react/jsx-key": "warn",
      "react/jsx-no-comment-textnodes": "off",

      // Next.js Specific
      "@next/next/no-img-element": "off", // allow using <img> instead of <Image>

      // General JS Rules
      "no-console": "warn", // Use "off" if you want no restriction
      "no-debugger": "warn",
    },
  },
];

export default eslintConfig;
