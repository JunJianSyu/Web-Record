/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 18/3/27
 */

let a = 'a',
    b = 'b',
    c = 'c'
console.log(a, b, c)    // a b c

// 解构赋值
let [d, e, f] = ['d', 'e', 'f']
console.log(d, e, f)    // d e f

// 不完全解构，完全解构是左边和右边格式完全相等
let [x1, , x3] = ['x1', 'x2', 'x3']
console.log(x1, x3)     // x1 x3

let [y1, [y2], y3] = ['y1', ['y11', 'y22'], 'y3']
console.log(y1, y2, y3)   // y1 y11 y3


// 对象解构解构赋值
let {o1, o2} = {o1: 'o-1', o2: 'o-2'}
console.log(o1, o2)   // o-1 o-2

// 如果需要修改变量名 需要 o3: oo3
let {o3: oo3} = {o3: 'o3', o4: 'o4'}
console.log(oo3)   // o3

// 解构默认值
let {xx = 10} = {}
console.log(xx)   // 10

// 导出对象方法
let {cos, pow, sin} = Math
console.log(cos(10), pow(10, 2), sin(10))

// 字符串解构
let [str1, str2, str3] = 'abc'
console.log(`${str1}-${str2}-${str3}`)  // a-b-c

// 字符串属性->更名
let {length: len} = 'abcdef'
console.log(len)    // 6

// 函数参数解构
function fn([x, y]) {
    console.log(x, y)
}
fn([1, 2])