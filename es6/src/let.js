/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/3/26
 */

// let 变量 (TDZ暂时性死区)
// console.log(name)  // 'ReferenceError'
// typeof name   // typeof 不再安全
let name = 'JunJianSyu'

{
    let a = 'a'
    var b = 'b'
}

// let 块级作用域
// console.log(b)   // 'b'
// console.log(a)   // 'ReferenceError'

// for 判断条件在外层作用域，let i = 'a' 在内层块级作用域声明
for (let i = 0; i < 10; i++) {
    let i = 'a'
    console.log(i)   // 'a'
}

// var 声明的变量有变量提升特性
// console.log(as)
var as = 'ascension'

// console.log(fn)  // 'undefined'
// console.log(_fn())  // 'Fn: Function'
// 函数声明和表达式的区别在于函数声明 可执行有类型值 函数表达式跟普通变量提升一样
var fn = function () {
    console.log('fn')
}
function _fn() {
    console.log('_fn')
}

// 块级作用域
var tmp = Date.now()
function f() {
    console.log(tmp)
    if (false) {
        var tmp = 'Hello world'
    }
}
// 由于var声明不存在块级作用域 变量被提升到f函数顶部 赋值undefined console.log(tmp) 就近查询作用域tmp变量 输出undefined
f()

;(function () {
    // IIFE
})()

// IIFE模式和块级作用域对比
{
   let a = {}
   a.toString()
}

// const和let一样唯一的区别是const是常量，第一次申明的时候必须赋值, 不然报错
const MAX_A = 'MAX_A'
// console.log(MAX_A)

// es6声明变量的6种方法 var 、function 、let 、const 、import 、 class