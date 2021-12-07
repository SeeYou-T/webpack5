const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    // 输出文件
    filename: "bundle.js", // 输出文件名
    path: path.resolve(__dirname, "./dist"), // 输出文件路径
    clean: true, // 清除旧打包文件
  },

  mode: "development", // 开发模式
  devtool: "inline-source-map", // 源码问题定位
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 主文件路径
      filename: "app.html", // 主文件名
      inject: "body", // script 位置
    }),
  ],
  devServer: {
    static: "./dist", // 热加载
  },
};
