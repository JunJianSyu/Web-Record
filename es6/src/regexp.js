/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 18/3/27
 */

// 正则

// u修饰符 Unicode模式 匹配大于 \uFFFF的字符
console.log(/a{2}/.test('aa'))
console.log(/./u.test('程序'))


// y修饰符 粘连修饰符 y修饰符必须从剩余的第一位开始匹配 而g是只要剩余串中有匹配就行
let s = 'aaa_aa_a'
let r1 = /a+/g,
    r2 = /a+/y
console.log(r1.exec(s))  // ['aaa']
console.log(r2.exec(s))  // ['aaa']

console.log(r1.exec(s))  // ['aa']
console.log(r2.exec(s))  // null

console.log(r1.exec(s))  // ['a']
console.log(r2.exec(s))  // ['aaa']

// 返回正则所有的修饰符
let _reg = /a{3}/igyu
console.log(_reg.flags)

// 具名组赋值
// let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar')
// console.log(one)
// console.log(two)

// 具名组匹配
// let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u
// let str = '2015-01-02'.replace(re, '$<day>/$<month>/$<year>')
// console.log(str)

