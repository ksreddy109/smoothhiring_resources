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
    const appSrc = path.join(__dirname, "src");
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string | false | string[]>),
      Modules: path.join(appSrc, "Modules"),
      store: path.join(appSrc, "store"),
      shared: path.join(appSrc, "shared"),
      helpers: path.join(appSrc, "helpers"),
      configs: path.join(appSrc, "configs"),
      assets: path.join(appSrc, "assets"),
      components: path.join(appSrc, "components"),
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
