const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js$/i,
      sourceMap: true,
      uglifyOptions: { compress: {}, mangle: true }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Bike API',
      template: './src/index.html',
      inject: 'head'
    })
  ],
  // resolve: {
  //   extensions: ['.js', '.jsx', '.css'],
  //   modulesDirectories: [
  //     'src',
  //     // '/usr/local/lib/node_modules',
  //     'node_modules'
  //   ]
  // },
  module: {
    rules: [
      { test: /\.css$/i, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] }
      // ,
      // { test: /\.jsx?$/, loader: 'babel?stage=0', exclude: /node_modules/ }
       ,
       { test: /\.js$/, exclude: "/node_modules/", loader: "eslint-loader" }
    ]
  }
};