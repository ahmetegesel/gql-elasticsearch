const TerserPlugin = require('terser-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const ConfigCodeBase = require('./webpack.common');

module.exports = WebpackMerge(ConfigCodeBase, {
  mode: 'production',
  plugins: [
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // set to true if you want JS source maps
      }),
    ]
  }
});
