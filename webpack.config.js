const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack');
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
        new CopyWebpackPlugin([
            {
                from: 'src/files',
                to: 'file'
            }
        ]),
        // new ImageminPlugin({
        //     bail: false, // Ignore errors on corrupted images
        //     cache: true,
        //     imageminOptions: {
        //       // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them
       
        //       // Lossless optimization with custom option
        //       // Feel free to experiment with options for better result for you
        //       plugins: [
        //         ["gifsicle", { interlaced: true }],
        //         ["jpegtran", { progressive: true }],
        //         ["optipng", { optimizationLevel: 5 }],
        //         [
        //           "svgo",
        //           {
        //             plugins: [
        //               {
        //                 removeViewBox: false
        //               }
        //             ]
        //           }
        //         ]
        //       ]
        //     }
        // })
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
            },
            // {
            // test: /\.(jpe?g|png|gif|svg)$/i,
            // use: [
            //     {
            //     loader: 'file-loader' // Or `url-loader` or your other loader
            //     }
            // ]
            // }
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