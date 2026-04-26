import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  transpilePackages: ["@mui/material", "@mui/icons-material", "@smoothhiring/smooth-ui"],
  turbopack: {
    root: path.join(__dirname),
  },
  webpack: (config) => {
    const legacy = path.join(__dirname, "src/legacy");
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string | false | string[]>),
      Modules: path.join(legacy, "Modules"),
      store: path.join(legacy, "store"),
      shared: path.join(legacy, "shared"),
      helpers: path.join(legacy, "helpers"),
      configs: path.join(legacy, "configs"),
      assets: path.join(legacy, "assets"),
    };
    const rules = config.module?.rules;
    if (Array.isArray(rules)) {
      rules.push({
        test: /\.svg$/i,
        type: "asset/resource",
      });
    }
    return config;
  },
};

export default nextConfig;
