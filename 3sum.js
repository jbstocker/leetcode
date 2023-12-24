/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  validTriplets = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      const slicedNum = nums.slice(i + 1, j);
      if (slicedNum && slicedNum.length !== 0) {
        const combo = nums[i] + nums[j];
        let triplet;
        if (combo === 0) {
          triplet = slicedNum.indexOf(combo);
        } else {
          triplet = slicedNum.indexOf(-1 * combo);
        }
        if ((triplet && triplet !== -1) || triplet === 0) {
          validTriplets.push([nums[i], nums[j], slicedNum[triplet]].sort());
        }
      }
    }
  }

  let unique = Array.from(
    new Set(validTriplets.map(JSON.stringify)),
    JSON.parse
  );
  return unique;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
