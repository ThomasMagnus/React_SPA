const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const  {  CleanWebpackPlugin  }  =  require('clean-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.ts', '.jsx', '.js', '.json', '.tsx']
	},
	mode: 'development',
	entry: path.resolve(__dirname, './src/js/Index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: '[name].[hash].js'
	},
	watch: true,
	module: {
		rules: [{
				test: /\.[tj]sx?$/, 
				use: ['ts-loader'],
			}]
	},
	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin(),
	]
}