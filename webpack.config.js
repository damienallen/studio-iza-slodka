const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

    // context: path.resolve(__dirname),
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },

    plugins: [
        new MiniCssExtractPlugin(),
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
        new CopyWebpackPlugin([
            {
                from: 'src/files',
                to: 'file'
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
            },
            {
                test: /\.(jpe?g|png)$/i,
                use: {
                    loader: 'responsive-loader',
                    options: {
                        sizes: [300, 600, 1200, 2000],
                        adapter: require('responsive-loader/sharp'),
                        context: '/src/'
                        name: './img/[name]_[width].[ext]'
                    }
                }
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