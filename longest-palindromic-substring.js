/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s;
  } else {
    return reducer(s);
  }
};

let reducer = (string) => {
  let longest = '';
  for (let i = 0; i < string.length; i++) {
    let end = endFinder(string.slice(i));
    longest = end.length > longest.length ? end : longest;
  }
  return longest !== '' ? longest : string[0];
};

let endFinder = (string) => {
  let endIndex = string.lastIndexOf(string[0]);
  if (endIndex !== -1 && endIndex !== 0) {
    if (confirmPal(string.slice(0, endIndex + 1))) {
      return string.slice(0, endIndex + 1);
    } else {
      return endFinder(string.slice(0, endIndex));
    }
  } else {
    return '';
  }
};

let confirmPal = (string) => {
  let pal = true;
  if (string.length === 1) {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (
      string[string.length - 1 - i] &&
      string[i] === string[string.length - 1 - i]
    ) {
      pal = true;
    } else {
      return false;
    }
  }
  return pal;
};




