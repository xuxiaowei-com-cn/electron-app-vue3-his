const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 依赖分析
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader' },
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  /**
   * 是否输出源码（控制除 main.js 代码）
   * 只能为 string、false
   * source-map：输出源码，用于调试，但源码文件较大
   * none：不输出源码
   * https://www.webpackjs.com/configuration/devtool/
   */
  devtool: 'source-map',
  optimization: {
    minimize: process.env.NODE_ENV !== 'development',
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: { // https://www.webpackjs.com/plugins/split-chunks-plugin/#optimization-splitchunks
      chunks: 'async',
      minSize: 30000, // （默认值：30000）块的最小大小。
      maxSize: process.env.NODE_ENV === 'development' ? 0 : 1024 * 1024, // 块的最大大小。
      minChunks: 1, // （默认值：1）在拆分之前共享模块的最小块数
      maxAsyncRequests: 10, // （默认为5）按需加载时并行请求的最大数量
      maxInitialRequests: 6, // （默认值为3）入口点的最大并行请求数
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vue: {
          test: /[\\/]node_modules[\\/]vue/, // vue、vuex、vue-router
          priority: -10,
          name: 'vue',
          chunks: 'all',
        },
        'ant-design-vue': {
          test: /[\\/]node_modules[\\/]ant-design-vue/,
          priority: -11,
          name: 'ant-design-vue',
          chunks: 'all',
        },
        'electron-log': {
          test: /[\\/]node_modules[\\/]electron-log/,
          priority: -12,
          name: 'electron-log',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -200,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    // https://vue-loader.vuejs.org/guide/#manual-setup
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new BundleAnalyzerPlugin(), // 依赖分析
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/src/assets`,
          to: `${__dirname}/.webpack/renderer${process.env.NODE_ENV === 'development' ? '' : '/main_window'}/assets`,
        },
        {
          from: `${__dirname}/node_modules/ant-design-vue/dist/antd${process.env.NODE_ENV === 'development' ? '' : '.min'}.css`,
          to: `${__dirname}/.webpack/renderer${process.env.NODE_ENV === 'development' ? '' : '/main_window'}/assets/css/antd.min.css`,
        },
        {
          from: `${__dirname}/node_modules/jsencrypt/bin/jsencrypt.min.js`,
          to: `${__dirname}/.webpack/renderer${process.env.NODE_ENV === 'development' ? '' : '/main_window'}/assets/js/jsencrypt/bin/jsencrypt.min.js`,
        },
        {
          from: `${__dirname}/node_modules/crypto-js/crypto-js.js`,
          to: `${__dirname}/.webpack/renderer${process.env.NODE_ENV === 'development' ? '' : '/main_window'}/assets/js/crypto-js/crypto-js.js`,
        },
        {
          from: `${__dirname}/LICENSE`,
          to: `${__dirname}/.webpack/renderer`,
        },
      ],
    }),
  ],
};
