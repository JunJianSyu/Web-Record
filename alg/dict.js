/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/13
 */

// 字典
class Dict {
    constructor() {
        this.dataStore = new Array()
    }

    add(key, value) {
        this.dataStore[key] = value
    }

    find(key) {
        return this.dataStore[key]
    }

    remove(key) {
        delete this.dataStore[key]
    }

    count() {
        let n = 0
        for (let key in Object.keys(this.dataStore)) {
            ++n
        }
        return n
    }

    clear() {
        for (let key in Object.keys(this.dataStore)) {
            delete this.dataStore[key]
        }
    }

    showAllsort() {
        for (let key in Object.keys(this.dataStore).sort()) {
            // 按unicode顺序输出
            console.log(`${key} => ${this.dataStore[key]}`)
        }
    }
}

