const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                from:'src/images',
                to:'img'
            } 
        ]), 
   ],

   module:{
        rules:[
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader?url=false', 'sass-loader']
            }
       ]
    },

    resolve: {
        alias: {
          'images': resolve('./img/')
        }
    },

    devtool: 'source-map'

}