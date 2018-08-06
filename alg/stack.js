/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/12
 */

// 栈 后入先出的数据结构
class Stack {
    constructor() {
        this.top = 0
        this.stackStore = []
    }

    push(element) {
        this.stackStore[this.top++] = element
    }

    pop() {
        let _ele = this.stackStore.pop()
        --this.top
        return _ele
    }

    peek() {
        return this.stackStore[this.top - 1]
    }

    length() {
        return this.top
    }

    clear() {
        delete this.stackStore
        this.stackStore = []
        this.top = 0
    }
}

/*
// 进制转换
function mulBase(num, base) {
    let _stack = new Stack()
    do {
        _stack.push(num % base)
        num = Math.floor(num /= base)
    } while (num > 0)
    let converted = ''
    while (_stack.length() > 0) {
        converted += _stack.pop()
    }
    return converted
}

// 二进制转十进制
function binaryTonum(binary) {
    let _binaryArr = binary.toString().split('')
    let _num = 0
    for (let i = 0; i < _binaryArr.length; ++i) {
        _num += _binaryArr[i] * Math.pow(2, _binaryArr.length - 1 - i)
    }
    return _num
}

// debugger
let _converted32to2 = mulBase(32, 2)
console.log(`32 的二进制是 ${_converted32to2}`)
let _converted32to8 = mulBase(32, 8)
console.log(`32 的八进制是 ${_converted32to8}`)
let _converted2to10 = binaryTonum(100000)
console.log(`100000 的十进制是 ${_converted2to10}`)


// 回文
function isPalindrome(word) {
    let _stack = new Stack()
    for (let i = 0; i < word.length; ++i) {
        _stack.push(word[i])
    }
    let _word = _stack.stackStore.reverse().join('')
    if (word == _word) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome('aba'))
*/

// 栈的递归
function fact(n) {
    let _stack = new Stack()
    while (n > 1) {
        _stack.push(n--)
    }
    let product = 1
    while (_stack.length() > 0) {
        product *= _stack.pop()
    }
    return product
}

console.log(fact(5))

// 算法表达式检测
function isExpression(expression) {
    let _regExp = /\(|\[\{|\}|\]|\)/g
    let len = expression.length
    let _stack = new Stack()
    for (let i = 0; i < len; ++i) {
        if (_regExp.test(expression[i])) {
            if (_stack.length()) {
                _stack.pop()
            } else {
                _stack.push(expression[i])
            }
        }
    }
    return _stack.length() > 0 ? false : true
}

console.log(isExpression('23+(30/15'))