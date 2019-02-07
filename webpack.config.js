const baseUrl = require('./jsconfig.json').compilerOptions.baseUrl;
const production = process.env.NODE_ENV === "production";

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: [
		path.resolve('.', baseUrl, 'index.js'),
		path.resolve('.', baseUrl, 'index.scss')
	],
	output: {
		filename: 'bundle-[hash].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(css|scss|sass)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							modules: true, // all css is scoped to whatever file imports it (use :global(.class) to circumvent)
							localIdentName: '[name]__[local]____[hash:6]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('postcss-import')({ path: baseUrl }), // allows absolute imports from baseURL
								require('postcss-node-sass')
							]
						}
					}
				]
			},
			{
				test: /\.(gif|svg|json|xml|jpeg|jpg|png|webmanifest)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							context: baseUrl
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({filename: 'bundle-[hash].css'}),
		new HtmlWebpackPlugin({template: path.resolve('.', baseUrl, 'index.html')}),
	].concat(
		production
			? [new OptimizeCssAssetsWebpackPlugin({ cssProcessorPluginOptions: {preset: [ 'default', { calc: false }]}})]
			: []
	),
	devServer: {
		port: 8080,
		https: false,
		historyApiFallback: {index: 'index.html'}
	}
}
