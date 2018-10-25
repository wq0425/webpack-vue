//在开发环境要使用的配置
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader', 
              'postcss-loader'
            ]
          },
          {
            test: /\.styl(us)$/,
            use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
          },
        ]
      },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
