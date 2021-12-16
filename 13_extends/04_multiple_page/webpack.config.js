const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "多页面",
      template: "./index.html",
      chunks: ["main", "lodash"],
      filename: "main/index.html",
      inject: "body", // script 位置
      publicPath: "http://www.a.com",
    }),
    new HtmlWebpackPlugin({
      title: "多页aaa面",
      template: "./index2.html", // 主文件路径
      chunks: ["main2", "lodash"], // 打包不同的模块
      filename: "main2/index2.html", // 输出文件名称
      inject: "body", // script 位置
      publicPath: "http://www.b.com",
    }),
  ],
  entry: {
    main: {
      import: ["./src/app.js"],
      dependOn: "lodash",
      filename: "chanel/[name].js",
    },
    main2: {
      import: ["./src/app2.js"],
      dependOn: "lodash",
      filename: "chanel/[name].js",
    },
    // lodash: "lodash",
    lodash: {
      import: "lodash",
      filename: "common/[name].js",
    },
  },
  //   entry: {
  //     index: "./src/index.js", // 入口文件
  //     // another: "./src/another-module.js",
  //     // index: {
  //     //   import: "./src/index.js", // 入口文件
  //     //   dependOn: "shared",
  //     // },
  //     // another: {
  //     //   import: "./src/another-module.js",
  //     //   dependOn: "shared",
  //     // },
  //     // shared: "lodash",
  //   },
};
