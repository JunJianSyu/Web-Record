/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 18/3/22
 */
module.exports = (ctx) => ({
    parser: false,
    plugins: [
        require('precss')(ctx.plugin),
        require('postcss-import')(ctx.plugin),
        require('cssnano')(ctx.plugin)
    ]
})