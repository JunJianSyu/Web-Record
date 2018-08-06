/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/13
 */

// 单向链表
class LinkedNode {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = new LinkedNode('head')
    }

    find(item) {
        let currNode = this.head
        while (currNode.element != item) {
            currNode = currNode.next
        }
        return currNode
    }

    insert(newElement, item) {
        let newNode = new LinkedNode(newElement)
        let current = this.find(item)
        newNode.next = current.next
        current.next = newNode
    }

    display() {
        let currNode = this.head
        while (currNode.next != null) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }

    findPrev(item) {
        let currNode = this.head
        while (currNode.next != null && currNode.next.element != item) {
            currNode = currNode.next
        }
        return currNode
    }

    remove(item) {
        let prevNode = this.findPrev(item)
        if (prevNode.next.next != null) {
            let tmp = prevNode.next.next
            prevNode.next = null
            prevNode.next = tmp
        } else {
            prevNode.next = null
        }
    }
}

// 双向链表
class BothLinkNode {
    constructor(element) {
        this.element = element
        this.prev = null
        this.next = null
    }
}

class BothLinkList {
    constructor() {
        this.head = new BothLinkList('head')
    }

    find(item) {
        let currNode = this.head
        if (currNode.element != item) {
            currNode = currNode.next
        }
        return currNode
    }

    insert(newElement, item) {
        let newNode = new BothLinkNode(newElement)
        let currNode = this.find(item)
        newNode.next = currNode.next
        newNode.prev = currNode
        currNode.next = newNode
    }

    remove(item) {
        let currNode = this.find(item)
        if (currNode.next != null) {
            currNode.prev.next = currNode.next
            currNode.next.prev = currNode.prev
            currNode.next = null
            currNode.prev = null
        }
    }

    findLast() {
        let currNode = this.head
        if (currNode.next != null) {
            currNode = currNode.next
        }
        return currNode
    }

    displayReverse() {
        let currNode = this.head
        currNode = this.findLast()
        while (currNode.prev != null) {
            console.log(currNode.element)
            currNode = currNode.prev
        }
    }

    display() {
        let currNode = this.head
        while (currNode.next != null) {
            console.log(currNode.element)
            currNode = currNode.next
        }
    }
}

// 循环链表
class ClinkedNode {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class ClinkedList {
    constructor() {
        this.head = new ClinkedNode('head')
        this.head.next = this.head
    }

    find(item) {
        let currNode = this.head
        while (currNode.next != currNode && currNode.element != item) {
            currNode = currNode.next
        }
        return currNode
    }

    insert(newElement, item) {
        let newNode = new ClinkedNode(newElement)
        let currNode = this.find(item)
        newNode.next = currNode.next
        currNode.next = newNode
    }

    findPrev(item) {
        let currNode = this.head
        while (currNode.next != currNode && currNode.next.element != item) {
            currNode = currNode.next
        }
        return currNode
    }

    remove(item) {
        let prevNode = this.findPrev(item)
        let currNode = prevNode.next
        if (currNode.next == this.head) {
            prevNode.next = this.head
        } else {
            prevNode.next = currNode.next
        }
        currNode.element = null
        currNode.next = null
    }
}

// 链表 advance(item, n) back(item, n) 前移后移方法 用循环定位currNode进行位移指针变换
