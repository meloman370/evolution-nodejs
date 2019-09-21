const path = require('path');
const webpack = require('webpack')
var dotenv = require('dotenv').config({path: __dirname + '/.env'});

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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed)
    })
  ]
}
