const path = require('path');
const webpack = require('webpack');
const TsConfigPathsPlugin = require('awesome-typescript-loader');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app/app.component.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
