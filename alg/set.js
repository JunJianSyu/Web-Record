/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/15
 */

// 集合
class Set {
    constructor() {
        this.dataStore = []
    }

    add(data) {
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data)
            return true
        } else {
            return false
        }
    }

    remove(data) {
        let pos = this.dataStore[data].indexOf()
        if (pos > -1) {
            this.dataStore.splice(pos, 1)
            return true
        } else {
            return false
        }
    }

    contains(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true
        } else {
            return false
        }
    }

    // 并集
    union(set) {
        let tempSet = new Set()
        for (let i = 0; i < this.dataStore; ++i) {
            tempSet.add(this.dataStore[i])
        }
        for (let i = 0; i < set.dataStore.length; ++i) {
            if (!this.contains(set.dataStore[i])) {
                // 这里检测过元素 直接push
                tempSet.dataStore.push(set.dataStore[i])
            }
        }
        return tempSet
    }

    // 交集
    intersect(set) {
        let tempSet = new Set()
        for (let i = 0; i < this.dataStore.length; ++i) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i])
            }
        }
        return tempSet
    }
}