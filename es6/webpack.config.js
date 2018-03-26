/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/3/26
 */

const webpack = require('webpack')
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, ''),
    entry: {
        app: './app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'src/[name].js'
    }
}