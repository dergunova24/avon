const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const multi = require('multi-loader');
module.exports = {
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
		filename: 'index.js'
	},
	devServer: {
			index: 'index.html'
	    },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
			  test: /\.(otf|ttf)$/,
			  loader: 'url-loader?limit=100000',
			  options: {
			  	name: '/fonts/[name].[ext]',
			  }
			},
			{
				test: /\.sass$/,
				use: [
						{loader: "style-loader"},
						{loader: "css-loader"},
						{loader: "sass-loader",
				    		options: {
				    			implementation: require("sass"),
				    			name: '[name]_[hash:7].[ext]'
				    		}
						}
				]
			},
			{test: /\.(pug|jade)$/, loader: 'pug-loader'},
			{test: /\.(gif|svg|webp)$/i,
				loader: "file-loader",
				options: {
					name: '[name]_[hash:7].[ext]',
				}
			},
			{
				test: /\.(jpe?g|png)$/i,
				loader: multi(
					'file-loader?name=[name]_[hash:7].webp!webp-loader?{quality: 95}',
					'file-loader?name=[name]_[hash:7].[ext]'
				)
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.pug',
		}),
		new CleanWebpackPlugin(['dist/*']),
		new HtmlWebpackExternalsPlugin({ // optional plugin: inject cdn
		      externals: [
		        {
		            module: 'jquery',
      				entry: 'https://unpkg.com/jquery@3.2.1/dist/jquery.min.js',
      				global: 'jQuery'
		        }
		      ],
		    })
	]
}