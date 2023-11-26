const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: "development",
    devServer: {
        port: 9091,
    },
    plugins: [
        new HTMLWebpackPlugin({
        template: '/public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "products",
            filename: 'productRemoteEntry.js',
            exposes: {
                './ProductIndex': './src/index'
            }
        })
    ]
}