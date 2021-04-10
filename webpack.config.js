const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'theme'),
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'src/icons',
                to: 'icons'
            },
            {
                from: 'src/files',
                to: 'files'
            }
        ])
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader?url=false', 'sass-loader']
            }
        ],
    },

    devtool: 'source-map'

}