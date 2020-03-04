const WebpackMerge = require('webpack-merge');
const path = require('path');
const ConfigCodeBase = require('./webpack.common');

module.exports = WebpackMerge(ConfigCodeBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    hot: true,
    historyApiFallback: true
  }
});
