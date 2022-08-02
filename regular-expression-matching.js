/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

//. matches any single character.​​​​

var isMatch = function (s, p) {
  let returnValue = true;
  // Find * and preceding char - Matches zero or more of the preceding element
  const starPairs = findStarPairs(p);
  for (starPair of starPairs) {
    console.log('starPair ', starPair);
    returnValue = s.indexOf(starPair) > 0 ? true : false;
  }
  return returnValue;
};

const findStarPairs = (pattern) => {
  let starPair = [];
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === '*') {
      starPair.push(pattern[i - 1]);
    }
  }
  return starPair;
};

console.log(isMatch('abcc', 'abc*d*'));
