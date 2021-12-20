const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  //   devtool: "inline-source-map",
  plugins: [new HtmlWebpackPlugin()],
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
