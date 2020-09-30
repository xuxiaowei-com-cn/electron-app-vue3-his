const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 依赖分析
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const rules = require('./webpack.rules');

const path = `${__dirname}/.webpack/renderer/main_window/`;

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
  optimization: {
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
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'jsencrypt',
          entry: 'bin/jsencrypt.min.js',
        },
        {
          module: 'crypto-js',
          entry: 'crypto-js.js',
          global: 'CryptoJS',
        },
      ],
      outputPath: `${process.env.NODE_ENV === 'development' ? '' : path}assets`,
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
          from: `${__dirname}/LICENSE`,
          to: `${__dirname}/.webpack/renderer`,
        },
      ],
    }),
  ],
};
