const path = require('path');
const webpack = require('webpack');
const AoTPlugin = require('@ngtools/webpack').AotPlugin;

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
  },
  plugins: [
    new AoTPlugin({
      tsConfigPath: path.join(process.cwd(), 'src/tsconfig.json'),
      entryModule: path.join(process.cwd(), 'src/app/app.module.ts#AppModule')
    })
  ]
};
