/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/15
 */

// 二叉树
class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }

    show() {
        return this.data
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        let n = new Node(data, null, null)
        if (this.root == null) {
            this.root = n
        } else {
            let current = this.root
            let parent
            while (true) {
                // 每次遍历储存父节点
                parent = current
                if (data < current.data) {
                    current = current.left
                    if (current == null) {
                        parent.left = n
                        break
                    }
                } else {
                    current = current.right
                    if (current == null) {
                        parent.right = n
                        break
                    }
                }
            }
        }
    }

    inOrder(node) {
        // 中序
        if (node != null) {
            this.inOrder(node.left)
            console.log(node.show())
            this.inOrder(node.right)
        }
    }

    preOrder(node) {
        // 先序
        if (node != null) {
            console.log(node.show())
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    postOrder(node) {
        // 后序
        if (node != null) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.show())
        }
    }

    getMin() {
        // 查找最小数
        let current = this.root
        while (current.left != null) {
            current = current.left
        }
        return current.show()
    }

    getMax() {
        // 查找最大数
        let current = this.root
        while (current.right != null) {
            current = current.right
        }
        return current.show()
    }

    find(data) {
        let current = this.root
        while (current != null) {
            if (current.data == data) {
                return current.data
            } else if (current.data > data) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return null
    }

    getSmallest(node) {
        while (node != null) {
            node = node.left
        }
        return node
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, data) {
        if (node == null) {
            return null
        }
        if (data == node.data) {
            if (node.left == null && node.right == null) {
                return null
            }
            // 没有左节点树
            if (node.left == null) {
                return node.right
            }
            // 没有右节点树
            if (node.right == null) {
                return node.left
            }
            let tempNode = this.getSmallest(node.right) // 查找最小的右节点
            // 临时节点赋值
            node.data = tempNode.data
            // 递归调用 删除节点，节点上移 (!自行脑补)
            node.right = this.removeNode(node.right, tempNode.data)
            return node
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node
        } else {
            node.right = this.removeNode(node.right, data)
            return node
        }
    }

    depth() {
        let current = this.root
        let ln = 0
        let rn = 0
        while (current != null) {
            ++ln
            current = current.left
        }
        current = this.root
        while (current != null) {
            ++rn
            current = current.right
        }
        return Math.max(ln, rn)
    }

    count() {
        let current = this.root
        let _count = 0
        function f(node) {
            if (node != null) {
                ++_count
                f(node.left)
                f(node.right)
            }
        }
        f(current)
        return _count
    }
}

let _tree = new BST()
_tree.insert(10)
_tree.insert(20)
_tree.insert(30)
_tree.insert(40)
_tree.insert(5)
_tree.insert(15)
_tree.insert(25)
_tree.insert(35)
_tree.insert(45)
// 中序
// _tree.inOrder(_tree.root)
// 先序
// _tree.preOrder(_tree.root)
// 后续
// _tree.postOrder(_tree.root)

// getMin
// console.log(_tree.getMin())
// getMax
// console.log(_tree.getMax())
// find
// console.log(_tree.find(25))
// remove
// _tree.remove(5)
// depth
// console.log(_tree.depth())
// count
// console.log(_tree.count())