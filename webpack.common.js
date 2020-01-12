const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, 'src/scripts/index.js')
  },
  output: {
    path: Path.join(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, 'src/images'), to: Path.resolve(__dirname, 'dist/images') }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: Path.resolve(__dirname, 'src/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: Path.resolve(__dirname, 'src/about.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'reference.html',
      template: Path.resolve(__dirname, 'src/reference.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'prices.html',
      template: Path.resolve(__dirname, 'src/prices.html')
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'src'
          }
        }
      }
    ]
  }
};
