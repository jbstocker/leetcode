/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
   if (strs.length === 1) {
     return strs[0]
   }
  let charArray = []
  let shortestLength = 1000000
  for (str of strs) {
    charArray.push(str.split(''))
    if (str.length < shortestLength) {
      shortestLength = str.length
    }
  }

  let returnValue = ''
  let skipOut = false

  for (let i = 0; i < shortestLength; i++) {
    let charValue = ''
    for (let j = 0; j < charArray.length - 1; j++) {
      if (charArray[j][i] === charArray[j+1][i]) {
        charValue = charArray[j][i]
      } else {
        charValue = ''
        skipOut = true
      }
    }
    if (skipOut) {
      break;
    }
    returnValue = returnValue + charValue
  }

  return returnValue
};
