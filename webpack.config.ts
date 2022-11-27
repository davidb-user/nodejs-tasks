import * as path from "path";
import * as webpack from "webpack";
import NodemonPlugin from "nodemon-webpack-plugin";
import nodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./index.ts",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new NodemonPlugin()],
  devtool: "source-map",
};

export default config;
