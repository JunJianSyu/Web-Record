/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/3/21
 */

const webpack = require('webpack')
// 不推荐全局安装webpack 版本4.2.0需要安装weboack-cli 来替换shell 依旧是本地安装 不推荐全局
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// issues webpack > 4.0.0 版本需 npm install --save-dev extract-text-webpack-plugin@next
const HtmlWebpackPlugin = require('html-webpack-plugin')

// postcss.config.js 中配置插件，precss包含css最新postcss-preset-env特性的转换

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '') + '/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {loader: 'css-loader', options: {importLoaders: 1}},
                        {loader: 'postcss-loader'},
                        {loader: 'px2rem-loader?remUnit=75&remPrecision=8'},   // px2rem 必须写在前面不然后续编译出错
                        {loader: 'less-loader'}
                    ],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist'
    }
}
