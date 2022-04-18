let path = require("path");
const BUILD_DIR = path.resolve(__dirname, "public/js");
const APP_DIR = path.resolve(__dirname, "app");

console.log("BUILD_DIR", BUILD_DIR);
console.log("APP_DIR", APP_DIR);

process.env.NODE_ENV = "development";

let config = {
  target: "web",
  entry: {
    app: [APP_DIR + "/index.js"],
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".styl", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)&/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
      },
      {
        test: /\.mp4$/,
        loader: "file-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
    ],
  },
};

module.exports = config;
