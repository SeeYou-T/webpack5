// 压缩css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 压缩js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  output: {
    // 输出文件
    // filename: "bundle.js", // 输出文件名
    filename: "scripts/[name].[contenthash].js", // 输出文件名
    publicPath: "http://localhost:8080/",
  },

  mode: "production", // 开发模式
  optimization: {
    // 优化配置
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
    // minimize: true, // 在开发环境下启用 CSS 优化，请将 optimization.minimize 设置为 true:
  },
  performance: {
    hints: false,
  },
};
