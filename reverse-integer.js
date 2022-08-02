/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) {
    return 0;
  }
  let negative = x < 0;
  if (negative) {
    x = removeNegative(x);
  }
  x = x.toString();
  x = x.split('');
  x.reverse();
  x = x.join('');
  x = removeZero(x);
  if (x > 2147483647) {
    return 0;
  }
  return negative ? parseInt(x) * -1 : parseInt(x);
};

let removeNegative = (x) => {
  return x * -1;
};

let removeZero = (xString) => {
  if (xString[0] === '0') {
    return removeZero(xString.slice(1));
  } else {
    return xString;
  }
};
