const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const path = require("path");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8081,
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    static: { directory: `${baseWebpackConfig.externals.paths.src}/static` },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
