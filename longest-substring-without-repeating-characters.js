/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let currentString;
  let largestValue = 0;

  for (i = 0; i < s.length; i++) {
    currentString = s[i];
    for (j = i + 1; j < s.length; j++) {
      if (s[i] !== s[j] && !currentString.includes(s[j])) {
        currentString += s[j];
      } else {
        break;
      }
    }
    largestValue =
      currentString.length > largestValue ? currentString.length : largestValue;
  }
  return largestValue;
};
