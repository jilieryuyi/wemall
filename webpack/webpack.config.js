const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output yuyi'
        }),
        new CleanWebpackPlugin('dist'),
    ],
    devServer: {
         contentBase: './dist'
   },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ],
        },{
            test: /\.(jpg|jpeg|gif|png|svg)$/,
            use: [{
                loader:"file-loader",
                options: {
                    name: '[name].[ext]'
                }
            }]
        }]
    }
};