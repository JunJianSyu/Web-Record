/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/13
 */

// 队列 先进先出的数据结构

class Queue {
    constructor() {
        this.queueStore = []
    }

    enqueue(element) {
        this.queueStore.push(element)
    }

    dequeue() {
        this.queueStore.shift()
    }

    front() {
        return this.queueStore[0]
    }

    back() {
        return this.queueStore[this.queueStore.length - 1]
    }

    toString() {
        let _str = this.queueStore.join('')
        return _str
    }

    empty() {
        if (this.queueStore.length == 0) {
            return true
        } else {
            return false
        }
    }
}

let _queue = new Queue()
_queue.enqueue('a')
_queue.enqueue('b')
_queue.enqueue('c')
_queue.dequeue()
console.log(_queue.front())
console.log(_queue.back())
console.log(_queue.toString())
console.log(_queue.empty())