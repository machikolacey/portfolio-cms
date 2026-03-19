const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'public', to: '' }
        ],
      }),
    ],
  devServer: {
      port: 3000,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api'],
          target: 'http://127.0.0.1:8000',
          changeOrigin: true,
        },
      ],
    },
};