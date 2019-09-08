const path = require('path');

module.exports = {
  entry: {
    client: './src/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    publicPath: "/assets/",
    filename: "[name].js",
    chunkFilename: 'chunks/[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
