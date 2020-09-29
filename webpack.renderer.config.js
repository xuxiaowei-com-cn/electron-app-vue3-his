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
    // new BundleAnalyzerPlugin(), // 依赖分析
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/src/assets`,
          to: `${__dirname}/.webpack/renderer${process.env.NODE_ENV === 'development' ? '' : '/main_window'}/assets`,
        },
      ],
    }),
  ],
};
