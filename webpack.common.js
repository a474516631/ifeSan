//const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
	entry:{
		main: "./src/index.js",
	},
	output:{
		filename: '[name].bundle.js',
		path:  path: path.resolve(__dirname, 'dist'),
    //publicPath:"/dist/",
	},
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
   new CleanWebpackPlugin(['dist']),
   new HtmlWebpackPlugin({
    title: 'Production'
   }),
   new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
  ],
   devServer:{
         //我们在这里对webpack-dev-server进行配置
         inline:true,
         //contentBase:".",
         //contentBase: path.resolve(__dirname, 'src'),
         //historyApiFallback:true,
         hot:true,
         port:8080,
         stats: "errors-only" 
   }
};

module.exports = config;