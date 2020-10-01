module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  /**
   * 是否输出源码（控制 main.js 代码）
   * 只能为 string、false
   * source-map：输出源码，用于调试，但源码文件较大
   * none：不输出源码
   * https://www.webpackjs.com/configuration/devtool/
   */
  devtool: 'source-map',
};
