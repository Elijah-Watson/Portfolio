const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: 'http://localhost:8080/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			chunks: ['home'],
			filename: './index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
});