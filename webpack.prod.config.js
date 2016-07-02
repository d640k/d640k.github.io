'use strict';

const webpack = require('webpack');
const core = require('./webpack.core.config');
const prod = {
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
};

module.exports = Object.assign({}, core, prod);
