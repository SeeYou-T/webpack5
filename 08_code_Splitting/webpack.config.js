const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const toml = require("toml");
const yaml = require("yaml");
const json5 = require("json5");

module.exports = {
  entry: {
    index: "./src/index.js", // 入口文件
    // another: "./src/another-module.js",
    // index: {
    //   import: "./src/index.js", // 入口文件
    //   dependOn: "shared",
    // },
    // another: {
    //   import: "./src/another-module.js",
    //   dependOn: "shared",
    // },
    // shared: "lodash",
  },
  output: {
    // 输出文件
    // filename: "bundle.js", // 输出文件名
    filename: "[name].bundle.js", // 输出文件名
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
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash].css", // 主文件名
    }),
  ],
  devServer: {
    static: "./dist", // 热加载
  },

  module: {
    rules: [
      {
        test: /\.png$/, // 正则匹配
        type: "asset/resource", // 生成一个单独的文件并导出 URL。
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
            maxSize: 4 * 1024 * 1024, // 超过4兆就编译为资源文件 否则为base64 默认为8kb
          },
        },
      },
      // loader
      // {
      //   test: /\.(css|less)$/,
      //   use: ["style-loader", "css-loader", "less-loader"],
      // },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"], //
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/,
        use: "csv-loader",
      },
      {
        test: /\.xml$/,
        use: "xml-loader",
      },
      {
        test: /\.toml$/,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
            exclude: [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/,
            ],
          },
        },
      },
    ],
  },
  optimization: {
    // 优化配置
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
    // minimize: true, // 在开发环境下启用 CSS 优化，请将 optimization.minimize 设置为 true:
    // splitChunks: {
    //   chunks: "all",
    // },
  },
};
