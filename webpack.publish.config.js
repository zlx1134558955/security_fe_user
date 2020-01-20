const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry:{
        app: path.join(__dirname,'./src/main.js')
    },
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		}),
        new CleanWebpackPlugin(),
	],
	module: {
        rules: [
        	{test: /\.css$/,use: [ "style-loader", "css-loader"]},
        	{test: /\.scss$/,use: [ "style-loader", "css-loader", "sass-loader"]},
        	{test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=10000&name=images/[hash:8]-[name].[ext]'},
        	{test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, 
        	{test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10 // 优先级
                },
                common: {
                    name: "common",
                    test: /[\\/]src[\\/]/,
                    minSize: 1024,
                    chunks: "all",
                    priority: 5
                }
            }
        }
    }
};