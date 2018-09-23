'use strict';

const config = require('config');
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    '@babel/polyfill',
    './app/index.js',
    'webpack-dev-server/client?http://0.0.0.0:8090', // WebpackDevServer host and port
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        include: [__dirname],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      },
      {test: /\.css$/, enforce: "pre", use: ['style-loader','css-loader']},
      {test: /\.(png|jpg|gif|svg|jpeg|otf|ttf|eot|woff|webp)$/, enforce: "pre", use:[{loader: 'url-loader',options: {limit: 25000}}]}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8090,
    historyApiFallback: true
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.join(__dirname, './app/index.html')
    }),
    new webpack.IgnorePlugin(/^(buffertools)$/),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      ENV: config.webpack,
      appConfig: JSON.stringify(config.clientConfig)
    }),
    new webpack.LoaderOptionsPlugin({ debug: process.env === 'production' })
  ],
  mode: 'development',
}
