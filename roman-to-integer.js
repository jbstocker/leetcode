/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let charArray = s.split('')
  let numArray = charArray.map((char) => {
    switch (char) {
      case 'I':
        return 1
      case 'V':
        return 5
      case 'X':
        return 10
      case 'L':
        return 50
      case 'C':
        return 100
      case 'D':
        return 500
      case 'M':
        return 1000
      default:
        break;
    }
  })

  let total = 0
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === 1 && (numArray[i+1] === 5 || numArray[i+1] === 10)) {
      numArray[i] = 0
      numArray[i+1] = numArray[i+1] - 1
    }
    if (numArray[i] === 10 && (numArray[i+1] === 50 || numArray[i+1] === 100)) {
      numArray[i] = 0
      numArray[i+1] = numArray[i+1] - 10
    }
    if (numArray[i] === 100 && (numArray[i+1] === 500 || numArray[i+1] === 1000)) {
      numArray[i] = 0
      numArray[i+1] = numArray[i+1] - 100
    }
    total = total + numArray[i]
  }


  return total
};
