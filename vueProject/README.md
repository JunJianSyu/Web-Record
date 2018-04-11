#### 多页面Vue配置
`vue-cli`脚手架生成的项目属于单页面的配置,多页面配置install一个nodejs库`glob`
glob主要用于匹配文件，`/src/*.js` 会匹配到所有的后缀为js的文件

`vue-cli`生成的项目，首先修改src目录下的结构，添加pages目录，可根据业务需求新建page页面目录，一个单页目录包含3个主要文件
`*.html`、`*.js`、`*.vue` 单业务页面也可使用vue-router

* `*.html`对应以前根目录下的index.html
* `*.js`对应以前main.js入口文件
* `*.vue`对应以前App.vue入口模板

删除src目录下的`main.js、App.vue`

build目录下的更改

##### utils.js
```javascript
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PAGE_PATH = path.resolve(__dirname, '../src/pages/')
const merge = require('webpack-merge')

exports.entries = function () {
  var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  var map = {}
  entryFiles.forEach((filePath) => {
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    map[filename] = filePath
  })
  return map
}

exports.htmlPlugin = function () {
  var entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
  var arr = []
  entryHtml.forEach((filePath) => {
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    var conf = {
      template: filePath,
      filename: filename + '.html',
      chunks: ['manifest', 'vendor', filename],
      inject: true
    }
    if (process.env.NODE_ENV === 'production') {
      conf = merge(conf, {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
      })
    }
    arr.push(new HtmlWebpackPlugin(conf))
  })
  return arr
}
```

添加代码至末尾，反出2个方法主要做目录下的文件遍历生成配置项

##### webpack.base.conf.js
```javascript
entry: utils.entries()
```
把以前的单入口换成utils.entries()方法返回的[...]，替换为多入口

##### webpack.dev.conf.js
```javascript
plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    /*
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    */
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new FriendlyErrorsPlugin()
  ].concat(utils.htmlPlugin())
```

主要是注释掉以前的单页面的htmlWebpackPlugin插件配置，在末尾直接concat()塞进utils.htmlPlugin()生成的多个html实例

##### webpack.prod.conf.js
```javascript
plugins: [
    ...
    // see https://github.com/ampedandwired/html-webpack-plugin
    /*
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    */
   ...
  ].concat(utils.htmlPlugin())
```

省略其他插件实例配置，注释单例，concat多例就行

`npm run build` dist目录看看生成的项目结构吧
> 本地查看请在dist目录启动一个静态资源服务器

#### 项目中使用多页面 vue-router

本地测试用hash可以看到前端路由的效果，可是为了美观要采用history

摘抄：
当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！
不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。
所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

需要启动服务器来覆盖所有的路由规则

#### 后续
此项目后续将实现本地服务器路由覆盖，异步组件，代码分割功能