const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    //another: './src/another-module.js'
  },
  //plugins: [
    // new HtmlWebpackPlugin({
    //     title: 'Output Management 2'
    //   })
    //],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
