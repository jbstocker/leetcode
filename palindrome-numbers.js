/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let charArray = x.toString().split('')
  let charArrayLength = charArray.length
  let halfLength = (charArrayLength % 2 === 0) ? (charArrayLength/2) : ((charArrayLength - 1)/2)
    for (let i = 0; i < halfLength; i++) {
      if (charArray[i] === charArray[(charArrayLength - 1) - i]) {
        continue
      } else {
        return false
      }
    }


return true
};
