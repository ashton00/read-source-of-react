const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const config = {
    context: __dirname,
    entry: './index.jsx',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        // dist 文件中打包html文件，并注入bundler.js
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('./index.html'),
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    // devtool : 'cheap-eval-source-map',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        filename: "bundle.js",
        contentBase: path.join(__dirname, "dist"),
        port: 9999,
        compress: false,
        hot: true
        // hot: true
    }

}

module.exports = config;