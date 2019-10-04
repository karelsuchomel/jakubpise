'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	externals: {
		SiteSettings: 'SiteSettings'
	},
	mode: 'development',
	bail: true,
	entry: {
		bundle: './src/index.js'
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, '../build')
	},
	module: {
		rules: [
			{
				oneOf: [
					{
						test: /\.js$/,
						use: 'babel-loader',
						exclude: /node_modules/
					},
					{
						test: /\.scss$/,
						use: [
							{
								loader: MiniCssExtractPlugin.loader,
								options: {
									publicPath: '../'
								}
							},
							'css-loader',
							'sass-loader',
						]
					},
					{
						loader: 'file-loader',
						exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.ejs$/],
						options: {
							name: '/media/[name].[hash:8].[ext]',
						},
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			// both options are optional
			filename: "css/[name].css",
		})
	]
};