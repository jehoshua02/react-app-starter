var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: "./app/index.js",
  output: {
    filename: "app.js",
    path: "./public/"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, '.')
  }
};
