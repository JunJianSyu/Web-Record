/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/12
 */

// 简单列表
class List {
    constructor() {
        this.listSize = 0
        this.pos = 0
        this.listStore = []
    }

    append(element) {
        this.listStore[this.listSize++] = element
    }

    find(element) {
        for (let i = 0; i < this.listStore.length; ++i) {
            if (this.listStore[i] == element) {
                return i
            }
        }
        return -1
    }

    remove(element) {
        let fountAt = this.find(element)
        if (fountAt > -1) {
            this.listStore.splice(fountAt, 1)
            --this.listSize
            return true
        }
        return false
    }

    length() {
        return this.listSize
    }

    toString() {
        return this.listStore.toString()
    }

    insert(element, after) {
        let insertPos = this.find(after)
        if (insertPos > -1) {
            this.listStore.splice(insertPos + 1, 0, element)
            ++this.listSize
            return true
        }
        return false
    }

    clear() {
        delete this.listStore
        this.listStore = []
        this.listSize = this.pos = 0
    }

    contains(element) {
        for (let i = 0; i < this.listStore.length; ++i) {
            if (this.listStore[i] == element) {
                return true
            }
        }
        return false
    }

    front() {
        this.pos = 0
    }

    end() {
        this.pos = this.listSize - 1
    }

    prev() {
        if (this.pos > 0) {
            --this.pos
        }
    }

    next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos
        }
    }

    currPos() {
        return this.pos
    }

    moveTo(position) {
        this.pos = position
    }

    getElement() {
        return this.listStore[this.pos]
    }
}

let listArray = new List()
listArray.append('A')
listArray.append('B')
listArray.append('C')
listArray.append('D')
listArray.append('E')
// delete
listArray.remove('E')
// length
console.log(listArray.length())
// toString
console.log(listArray.toString())
// front
listArray.front()
console.log(listArray.getElement())
// end
listArray.end()
console.log(listArray.getElement())
// prev
listArray.prev()
console.log(listArray.getElement())
// next
listArray.next()
console.log(listArray.getElement())
// moveTo
listArray.moveTo(2)
console.log(listArray.getElement())
