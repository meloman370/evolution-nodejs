const path = require('path');
const webpack = require('webpack')

// Configs for client side
const configs = {
  "API_URL": "http://localhost:8000/api/v1"
}

module.exports = {
  entry: {
    client: './src/client.js'
  },
  mode: 'development',
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(configs)
    })
  ]
}
