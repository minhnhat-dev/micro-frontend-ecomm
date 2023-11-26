const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  devServer: {
    port: 9090,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "/public/index.html",
    }),
    new ModuleFederationPlugin({
        name: 'container',
        remotes: {
            products: 'products@http://localhost:9091/productRemoteEntry.js'
        }
    }),
  ],
  mode: "development",
};
