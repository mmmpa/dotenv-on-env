const webpack = require('webpack');

const rootConfiguration = { target: 'node' }
const entry = { built: './src/index.js' }
const output = {
  filename: '[name]/index.js',
  library: 'load',
  libraryTarget: 'umd'
}
const plugins = [new webpack.optimize.UglifyJsPlugin()]

const modules = {
  rules: [
    {
      test: /\.js$/,
      use: [
        'babel-loader',
        'eslint-loader',
      ],
      exclude: /node_modules/,
    },
  ],
}

module.exports = Object.assign({}, {
  entry,
  output,
  module: modules,
  plugins,
}, rootConfiguration)
