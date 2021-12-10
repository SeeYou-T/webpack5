const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app.js",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true, // 在服务器端进行压缩，减少传输大小
    port: 3000,
    headers: {
      "x-Access-Token": "12345",
    },
    proxy: {
      "/api": "http://localhost:9000",
    },
    // https: true,
    http2: true,
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin()],
};
