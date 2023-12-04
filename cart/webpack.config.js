const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
    mode: 'development',
    devServer: {
        port: 9092
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'carts',
            filename: 'remoteEntry.js',
            exposes:  {
                './CardIndex': './src/index'
            }
        }),
        new HTMLWebpackPlugin({
            template: '/public/index.html' 
        }),
    ]
}