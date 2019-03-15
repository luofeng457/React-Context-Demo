const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
	mode: 'development',
	entry: [
		'babel-polyfill',
		'./index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle-[hash:6].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['env', 'es2015', 'react'],
					}
				}
			}, {
				test: /\.css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}

		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			title: 'test for context',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({sourceMap: true}),
		],
		minimize: true,
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendors: {
					chunks: 'all',
					name: 'vendors',
				}
			}
		}
	}
}