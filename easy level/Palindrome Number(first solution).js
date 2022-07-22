/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0) return false;
    let num = x;
    let numReversed = 0;

    for(let i=x.toString().length;i>0;i--){
        console.log(i, (num % 10*(10**i)))
        numReversed = numReversed +  num % 10*(10**(i-1))
        num  = Math.floor(num / 10)
    }
    return numReversed === x ? true : false
};