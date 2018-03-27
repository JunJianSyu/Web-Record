/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 18/3/27
 */

for (let key of Object.getOwnPropertyNames(String.prototype)) {
    console.log(key)
}

// String添加的查询字符串功能  支持第二个参数，位置索引
let s = 'Hello World'
console.log(s.includes('e'))
console.log(s.startsWith('H'))
console.log(s.endsWith('d'))

// repeat用来重复字符串 参数n次数
let repeat_s = s.repeat(2).replace(/\s/g, '')
console.log(repeat_s)

s = 'c'
// padStart前置补全 param => 补全length、补全字符
console.log(s.padStart(3, 'ab'))   // abc
console.log(s.padEnd(3, 'de'))     // cde

s = 'abcdef'
// substr 返回 start下标 -> length个数 的值
console.log(s.substr(1, 3))
// substring 返回2个参数下标之间的值
console.log(s.substring(1, 3))

// 模板字符串构造循环模板
let data = [1, 2, 3, 4, 5]
let tmpl = data => `
   <ul>
        ${data.map(item => `
            <li>${item}</li>
        `).join('')}
   </ul>
`
console.log(tmpl(data))


// tag标签模板
let name = 'JunJianSyu'
let htmlTmpl = outHtml`<p>${name} Hello</p>`
function outHtml(tmplText, ...tmplData) {
    let s = ''
    for (let i = 0; i < tmplText.length; i++) {
        s += tmplText[i].replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;')
        s += tmplData[i] || ''
    }
    return s
}

console.log(htmlTmpl)
