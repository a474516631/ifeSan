const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		inline:true,
		stats: "errors-only" 
	}
})	