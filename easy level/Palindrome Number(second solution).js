/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let reversedNum =  x.toString().split('').reverse().join('')
    return x.toString() === reversedNum ? true : false
};