module.exports = {
  devtool: 'source-map',
  entry: "./app/index.js",
  output: {
    path: "./bundle.js"
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    noInfo: true
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
