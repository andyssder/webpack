const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   // 使用 imports-loader 覆盖 this 指向
      //   test: require.resolve('./src/index.js'),
      //   use: 'imports-loader?this=>window'
      // },
      // {
      //   // 将一个全局变量作为一个普通的模块来导出
      //   test:require.resolve('./src/globals.js'),
      //   use: 'exports-loader?file,parse=helpers.parse'
      // }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
     _: 'lodash', //如果你遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 引入进来，并将其提供给需要用到它的模块。
     // join: ['lodash', 'join'] // 无论 join 方法在何处调用，我们都只会获取到 lodash 中提供的 join 方法。
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'shim'
    }),
  ]
};