const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "webpack-number.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "webpackNumber",
      type: "umd",
    },
    globalObject: "globalThis",
    clean: true,
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
