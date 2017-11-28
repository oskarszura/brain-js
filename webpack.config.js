const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    scripts: './index.js',
    css: './style.scss',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'scripts.js',
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }, {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!sass-loader'
        ),
      },
      {
        test: /\.jpg|.png/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
  ],
};
