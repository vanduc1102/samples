const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { removeModuleScopePlugin } = require("customize-cra");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    module: require.resolve("./polyfills-module.js"),
    fs: false,
    path: false,
    os: false,
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new NodePolyfillPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  if (!config.plugins) {
    config.plugins = [];
  }
  removeModuleScopePlugin()(config);
  return config;
};
