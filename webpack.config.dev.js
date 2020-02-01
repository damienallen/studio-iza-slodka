const rules = require('./webpack.rules');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Add production rules
console.log(` [mode=${process.env.NODE_ENV}]`)
rules.push({
    test: /\.(jpe?g|png)$/i,
    use: {
        loader: 'responsive-loader',
        options: {
            sizes: [420, 860, 1200, 2400],
            adapter: require('responsive-loader/sharp'),
            name: 'images/responsive/[hash]_[width].[ext]'
        }
    }
});

module.exports = {

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
                to: 'images'
            },
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
        rules,
    },

    devtool: 'source-map'

}