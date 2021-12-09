module.exports = {
  output: {
    // 输出文件
    // filename: "bundle.js", // 输出文件名
    filename: "scripts/[name].js", // 输出文件名
  },

  mode: "development", // 开发模式
  devServer: {
    static: "./dist", // 热加载
  },
};
