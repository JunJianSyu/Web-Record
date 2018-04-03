/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/3/29
 */

class MyPromise {
    constructor(taskFn) {
        this.STATUS = ['pending', 'fulfilled', 'rejected']
        this._st = this.STATUS[0]
        this._resolveCallBack = []
        this._rejectCallBack = []
        this._data = null
        // this 指针问题
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)

        this.isFunction(taskFn)

        try {
            taskFn(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }

    isFunction(fn) {
        if (typeof fn === 'function' && Object.prototype.toString.call(fn) === '[object Function]') {
            return true
        } else {
            throw new Error('not Function')
            return false
        }
    }

    setState(state) {
        if (this._st === this.STATUS[0]) {
            this._st = state
            return true
        } else {
            return false
        }
    }

    resolve(_data) {
        let _this = this
        setTimeout(function () {
            let stResult = _this.setState(_this.STATUS[1])
            if (stResult) {
                _this._data = _data
                for (let i = 0; i < _this._resolveCallBack.length; i++) {
                    _this._resolveCallBack[i](_data)
                }
            } else {
                return false
            }
        })
    }

    reject(_error) {
        let _this = this
        setTimeout(function () {
            let stResult = _this.setState(_this.STATUS[2])
            if (stResult) {
                _this._data = _error
                for (let i = 0; i < _this._rejectCallBack.length; i++) {
                    _this._rejectCallBack[i](_error)
                }
            } else {
                return false
            }
        })

    }
}

MyPromise.prototype.then = function (resolve, reject) {
    let _this = this
    let _myPromise
    _resolve = typeof resolve === 'function' ? resolve : function (value) { return value}
    _reject = typeof reject === 'function' ? reject : function (err) { throw err}

    if (_this._st === _this.STATUS[1]) {
        return _myPromise = new MyPromise(function (resolve, reject) {
            try {
                let _r = _resolve(_this._data)
                if (_r instanceof MyPromise) {
                    _r.then(resolve, reject)
                }
                resolve(_r)
            } catch (e) {
                reject(e)
            }
        })
    }

    if (this._st === _this.STATUS[2]) {
        return _myPromise = new MyPromise(function (resolve, reject) {
            try {
                let _r = _reject(_this._data)
                if (_r instanceof MyPromise) {
                    _r.then(resolve, reject)
                }
                reject(_r)
            } catch (e) {
                reject(e)
            }
        })
    }

    if (this._st === _this.STATUS[0]) {
        return _myPromise = new MyPromise(function (resolve, reject) {
            _this._resolveCallBack.push(function (value) {
                try {
                    let _r = _resolve(_this._data)
                    if (_r instanceof MyPromise) {
                        _r.then(resolve, reject)
                    }
                    resolve(_r)
                } catch (e) {
                    reject(e)
                }
            })

            _this._rejectCallBack.push(function (value) {
                try {
                    let _r = _reject(_this._data)
                    if (_r instanceof MyPromise) {
                        _r.then(resolve, reject)
                    }
                    reject(_r)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
}
MyPromise.prototype.catch = function (reject) {
    return this.then(null, reject)
}

// debugger
let _promise = new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        resolve({'name': 'JunJianSyu'})
    }, 0)
    // for (let i = 0; i < 10; i++) {
    //     i == 2 && resolve('a')
    // }
    // console.log('Go')
})
_promise.then(function (data) {
    console.log(data)
    return data
}).catch(function (e) {
    console.log(e)
})