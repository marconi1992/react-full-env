const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

clientConfig = {
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: true
    })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
}


serverConfig = {
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  entry: [ 'babel-polyfill', path.resolve(__dirname, 'server.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
}

module.exports = [clientConfig, serverConfig]