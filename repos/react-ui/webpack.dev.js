const WebpackMerge = require('webpack-merge');
const ConfigCodeBase = require('./webpack.common');

module.exports = WebpackMerge(ConfigCodeBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
  }
});
