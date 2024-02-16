export {};
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@/": path.resolve(__dirname, "src/"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/libs": path.resolve(__dirname, "src/libs"),
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/router": path.resolve(__dirname, "src/router"),
      "@/services": path.resolve(__dirname, "src/services"),
      "@/store": path.resolve(__dirname, "src/store"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/stories": path.resolve(__dirname, "src/stories"),
    },
  },
};
