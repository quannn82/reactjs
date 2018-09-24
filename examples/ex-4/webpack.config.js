const path = require('path');

module.exports = {
  entry: './src/home.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  }
};
