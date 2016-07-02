'use strict';

const webpack = require('webpack');
const core = require('./webpack.core.config');
const dev = {};

module.exports = Object.assign({}, core, dev);
