const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: './src/index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/images',
                to: 'img'
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: 'src/icons',
                to: 'ico'
            }
        ]),
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
                use: ['style-loader', 'css-loader?url=false', 'sass-loader']
            }
        ]
    },

    resolve: {
        alias: {
            'images': path.resolve('./img/')
        },
        alias: {
            'icons': path.resolve('./ico/')
        }
    },

    devtool: 'source-map'

}