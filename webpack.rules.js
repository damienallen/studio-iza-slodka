module.exports = [
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
];
  