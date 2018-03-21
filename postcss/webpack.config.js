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

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}
