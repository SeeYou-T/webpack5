const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
    }),
    new ModuleFederationPlugin({
      name: "nav", // 标记模块名称
      filename: "remoteEntry.js", // 远端访问路径
      remotes: {}, // 引用其他暴露的组件
      exposes: {
        // 暴露出去的组件
        "./Header": "./src/header.js",
      },
      shared: {},
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
