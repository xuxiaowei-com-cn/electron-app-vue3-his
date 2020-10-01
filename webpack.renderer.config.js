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
          from: `${__dirname}/node_modules/ant-design-vue/dist/antd.min.css`,
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
