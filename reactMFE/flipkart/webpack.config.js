const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;
const path = require("path");
module.exports = (_, argv) => ({
  output: {
     publicPath: "http://localhost:3201/",
    //publicPath: "auto",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    // static: path.join(__dirname, "dist"),
    port: 3201,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "flipkart",
      filename: "remoteEntry.js",
      remotes: {
        "billhost": "bill@http://localhost:3203/remoteEntry.js",
        "shiphost": "ship@http://localhost:3202/remoteEntry.js",
        "sharedStoreApp": "sharedStoreApp@http://localhost:3204/remoteEntry.js",
      },
      exposes: {},
      shared: {
        zustand: { singleton: true },
        react: {
          singleton: true,
          requiredVersion: false ,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: false ,
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: false ,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
  ],
});
