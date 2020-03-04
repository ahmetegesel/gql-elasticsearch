const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  title: 'GQL Elasticsearch',
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [HTMLWebpackPluginConfig],
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, './src/modules'),
      store: path.resolve(__dirname, './src/store'),
      lib: path.resolve(__dirname, './src/lib'),
      styles: path.resolve(__dirname, './src/styles'),
      layouts: path.resolve(__dirname, './src/layouts'),
      assets: path.resolve(__dirname, './src/assets'),
      enums: path.resolve(__dirname, './src/enums')
    }
  }
};
