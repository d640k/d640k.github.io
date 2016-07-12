'use strict';

// require.extensions['.md'] = () => { return; };

module.exports = {
	entry: './src/js/index.js',
	resolve: {
		extensions: ['', '.js']
	},
	devServer: {
		inline: true,
		port: 3333
	},
	output: {
		path: '/',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.svg$/,
				loader: 'url?limit=150000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
			},
			{
				test: /\.woff$/,
				loader: 'url?limit=150000&mimetype=application/font-woff&name=fonts/[name].[ext]'
			},
			{
				test: /\.woff2$/,
				loader: 'url?limit=150000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
			},
			{
				test: /\.[ot]tf$/,
				loader: 'url?limit=150000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
			},
			{
				test: /\.eot$/,
				loader: 'url?limit=150000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test:   /\.md/,
				loader: 'html!remarkable'
			}
		]
	}
};

// { test: /\.md$/, loader: "html!markdown" }
