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
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["@babel/preset-env","@babel/preset-react"]
            }
          }
        ]
      }
    ]
  }
};
