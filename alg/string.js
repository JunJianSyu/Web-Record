/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 18/4/10
 */

var alg_str = {
    hyphen: function (str) {
        // 正则替换实现
        // \1反向引用 配合分组(\w)使用 {1,}可换成*
        return str.replace(/(\w)\1{1,}/g, function (word) { return word.charAt(0) })
        // 循环实现
        var _str = ''
        for (var i = 0; i < str.length; ++i) {
            if (str.charAt(i) !== str.charAt(i + 1)) _str += str.charAt(i)
        }
        return _str
    },
    lengthOfLongestSubstring: function (str) {
        var _s = '',
            _maxStr = '',
            n = 0,
            flag = true;
        for (var i = 0, len = str.length; i < len; ++i) {
            n = i
            flag = true
            while (flag) {
                _s += str.charAt(n)
                if (_s.indexOf(str.charAt(n + 1)) > -1) {
                    flag = false
                    if (_maxStr.length < _s.length) {
                        _maxStr = _s
                    }
                    _s = ''
                } else {
                    ++n;
                }
            }
        }
        return _maxStr
    }
}

// debugger
var _str = 'pwwkew'
console.log(alg_str.lengthOfLongestSubstring(_str))