/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  validTriplets = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      console.log(`i: ${i}  j: ${j}`);
      const slicedNum = nums.slice(i + 1, j);
      console.log('slicedNum ', slicedNum);
      if (slicedNum && slicedNum.length !== 0) {
        console.log(nums[i] + nums[j]);
        const triplet = slicedNum.indexOf(-1 * (nums[i] + nums[j]));
        if (triplet && triplet !== -1 && triplet !== 0) {
          console.log('slicedNum ', slicedNum);
          console.log('triplet: ', triplet);
          console.log(`found a trip: ${[nums[i], nums[j], nums[triplet]]}`);
          validTriplets.push([nums[i], nums[j], nums[triplet]]);
        }
      }
    }
  }

  return validTriplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
