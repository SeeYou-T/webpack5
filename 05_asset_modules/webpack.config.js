const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    // 输出文件
    filename: "bundle.js", // 输出文件名
    path: path.resolve(__dirname, "./dist"), // 输出文件路径
    clean: true, // 清除旧打包文件
    assetModuleFilename: "images/[contenthash][ext]", // 静态资源目录 hash名称/源文件后缀
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

  module: {
    rules: [
      {
        test: /\.png$/, // 正则匹配
        type: "asset/resource", // 发送一个单独的文件并导出 URL。
        generator: {
          // 优先级高
          filename: "images/[contenthash][ext]",
        },
      },

      {
        test: /\.svg$/, // 正则匹配
        type: "asset/inline", // 导出一个资源的 data URI。
      },

      {
        test: /\.txt$/, // 正则匹配
        type: "asset/source", // 导出资源的源代码。
      },
      {
        test: /\.jpg$/, // 正则匹配
        type: "asset", // 在导出一个 data URI 和发送一个单独的文件之间自动选择。
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024, // 超过4兆就编译为资源文件 否则为base64 默认为4*1024
          },
        },
      },
    ],
  },
};
