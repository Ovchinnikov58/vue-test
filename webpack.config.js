const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                // scss
                test: /\.scss$/,
                use: [
                  "style-loader",
                  MiniCssExtractPlugin.loader,
                  {
                    loader: "css-loader",
                    options: { sourceMap: true }
                  },
                  {
                    loader: "sass-loader",
                    options: { sourceMap: true }
                  }
                ]
              },
              {
                // css
                test: /\.css$/,
                use: [
                  "style-loader",
                  MiniCssExtractPlugin.loader,
                  {
                    loader: "css-loader",
                    options: { sourceMap: true }
                  }
                ]
              }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
           filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'test',
            template: './index.html'
        }),
    ],
    devServer: {
        overlay: true
    }
}