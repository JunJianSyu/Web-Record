/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/14
 */

// 散列
class HashTable {
    constructor() {
        this.table = new Array(1993)  // 数组长度用质数
    }

    betterHash(data) {
        let H = 37
        let total = 0
        for (let i = 0; i < data.length; ++i) {
            // 避免发生索引碰撞，每次乘以一个质数
            total += total * H + data.charCodeAt(i)
        }
        total = total % this.table.length
        if (total < 0) {
            total += this.table.length - 1
        }
        return total
    }

    put(key, data) {
        let pos = this.betterHash(key)
        this.table[pos] = data
    }

    get(key) {
        return this.table[this.betterHash(key)]
    }

    showDistor() {
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(`${i} : ${this.table[i]}`)
            }
        }
    }
}


// 质数判断
function isPrime(n) {
    if (n <= 3) {
        return n > 1
    }
    if (n % 2 == 0 || n % 3 == 0) {
        return false
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false
        }
    }
    return true
}

// console.log(isPrime(1993))