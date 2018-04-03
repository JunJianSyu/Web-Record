/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/3/31
 */

// 详解jquery作者tmpl源码

(function () {
    // 创建模板缓存对象
    let cache = {}

    // 具名函数表达式 this指向window.tmpl
    this.tmpl = function tmpl(str, data) {
        // 匹配所有非字母、数字、下划线以外的字符
        let fn = !/\W/.test(str) ?
            // 如没有检测到匹配字符 如果存在缓存返回缓存,否则返回模板innerHTML
            cache[str] = cache[str] || tmpl(document.querySelector(str).innerHTML) :
            new Function("data",
                // 创建数组 print函数接收参数push
                "var p = [], print = function () { p.push.apply(p, arguments);};" +
                // with obj参数对象进入专属作用域
                "with(data) { p.push('" +
                    str
                        .replace(/[\r\t\n]/g, ' ')   // 匹配回车、制表符、换行 替换成空
                        .split("<%").join("\t")      // <% 进行切割字符串 替换成\t 重整字符串
                        .replace(/((^|%>)[^\t]*)'/g, "$1\r")  // 去除模板中的单引号 替换成\r
                        .replace(/\t=(.*?)%>/g, "',$1,'")    // 替换值 = '标示值' 非常重要 \t=lists[i].name%> ',lists[i].name,'
                        .split('\t').join("');")           // js语句\t 替换成 ');
                        .split("%>").join("p.push('")       // js语句 结尾 %> 替换成 p.push('
                        .split("\r").join("\\'")            // 现在将\r转义成 ' 单引号
                + "');}return p.join('');"               // 将数组转换成字符串
            )
        return data ? fn(data) : fn
    }
})()

// Example
/*
<script type="text/templete" id="tmpl">
    <ul>
        <% for (var i = 0; i < data.length; i++) { %>
            <li><%=data[i].name%></li>
        <% } %>
    </ul>
</script>
*/

let str_tmpl = "<ul><% for (var i = 0; i < data.length; i++) { %><li><%=data[i].name%></li><% } %></ul>"
let _data = [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'}
]
// debugger;
let _html = tmpl(str_tmpl, _data)

// 总结所有的js模板引擎原理就是用正则来区分html和js逻辑语句和值 然后push到数组 最终返回拼接好的函数字符串
// 主要用到了 Function 构造函数 (参数, 函数体) 而函数体接受一个字符串 最终返回一个函数 在给函数传入数据拼装出html