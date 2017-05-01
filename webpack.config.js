const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        loader: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        }),
        test: /\.s?css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

