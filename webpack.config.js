const baseUrl = require('./jsconfig.json').compilerOptions.baseUrl;
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const postCssGlobalImportPlugin = require('postcss-global-import');
const postCssImportPlugin = require('postcss-import');
const postCssNodeSassPlugin = require('postcss-node-sass');

const production = process.env.NODE_ENV === 'production';
const analyze = process.env.WEBPACK_ANALYZE;

module.exports = {
	mode: production ? 'production' : 'development',

	entry: [
		path.resolve('.', baseUrl, 'index.js'),
		path.resolve('.', baseUrl, 'index.scss'),
	],
	output: {
		filename: '[name]-[chunkhash].js',
		chunkFilename: '[name]-[chunkhash].js',
		publicPath: '/',
	},

	devtool: production ? '' : 'source-map',

	devServer: {
		port: 8080,
		https: false,
		historyApiFallback: { index: 'index.html' },
	},

	plugins: [
		new MiniCssExtractPlugin({ filename: 'bundle-[hash].css' }),
		new HtmlWebpackPlugin({ template: path.resolve('.', baseUrl, 'index.html') }),
	].concat(
		production ? new OptimizeCssAssetsWebpackPlugin() : [],
		analyze ? new BundleAnalyzerPlugin() : [],
	),

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
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
							localIdentName: '[name]__[local]____[hash:6]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								postCssGlobalImportPlugin(),
								postCssImportPlugin({ path: baseUrl }),
								postCssNodeSassPlugin(),
							],
						},
					},
				],
			},
			{
				test: /\.(gif|svg|json|xml|jpeg|jpg|png|webmanifest)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							context: baseUrl,
						},
					},
				],
			},
		],
	},

	resolve: {
		modules: [
			path.resolve(__dirname, baseUrl),
			'node_modules',
		],
	},
};