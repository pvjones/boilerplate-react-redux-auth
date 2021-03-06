const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseHref = process.env.WP_BASE_HREF ? process.env.WP_BASE_HREF : '/'

module.exports = env => ({

  context: path.resolve(__dirname, '..', 'src', 'app'),

  entry: {
    app: './App.jsx',
  },

  resolve: {
    modules: [
      path.resolve(__dirname, '..'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico|ttf|woff2?|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'img',
      to: 'img',
    }]),
    new HtmlWebpackPlugin({
      template: 'index.html',
      baseUrl: baseHref,
      chunksSortMode: 'dependency',
    }),
  ],

})
