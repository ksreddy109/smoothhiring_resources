import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Legacy ported ATS modules (not part of the static resources Next shell)
    "src/Modules/**",
    "src/helpers/**",
    "src/shared/**",
    "src/assets/**",
    "src/store/**",
    "src/configs/**",
  ]),
]);

export default eslintConfig;
