const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./test.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          presets: ["@babel/preset-env"]
        },
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;

/*
{
    test: /\.wasm$/,
    use: "file-loader"
  }*/
