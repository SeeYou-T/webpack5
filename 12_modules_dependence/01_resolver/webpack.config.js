const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 模块解析路径
    },
    extensions: [".json", ".js", ".vue"], // 同名模块解析顺序
  },
};
