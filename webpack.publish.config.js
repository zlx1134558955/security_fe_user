const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|png|gif|bmp|jpeg|svg)$/, use: 'url-loader?limit=10000&name=images/[hash:8]-[name].[ext]' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      $: path.resolve(__dirname, './public'),
      Config: path.resolve(__dirname, './config')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10 // 优先级
        },
        common: {
          name: 'common',
          test: /[\\/]src[\\/]/,
          minSize: 2,
          chunks: 'all',
          priority: 5
        },
        public: {
          name: 'public',
          test: /[\\/]public[\\/]/,
          minSize: 2,
          chunks: 'all',
          priority: 4
        }
      }
    }
  }
}
