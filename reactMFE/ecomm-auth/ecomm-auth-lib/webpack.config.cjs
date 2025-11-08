const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3204,
    hot: true,
    static: {
    directory: path.join(__dirname, "dist"), 
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  },
  output: {
  publicPath: "http://localhost:3204/",   
  path: path.resolve(__dirname, "dist"),
  filename: "bundle.js",
  clean: true,
},
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    fullySpecified: false,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "sharedStoreApp",
      filename: "remoteEntry.js",
      exposes: {
        "./store": "./src/store.ts",
      },
      shared: {
    react: { singleton: true, eager: true, requiredVersion: false },
    "react-dom": { singleton: true, eager: true, requiredVersion: false },
    zustand: { singleton: true, requiredVersion: false },
  },
    }),
  ],
};
