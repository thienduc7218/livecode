/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const s = x.toString()

    return s === s.split('').reverse().join('')
};