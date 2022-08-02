/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      let current = height[left] * (right - left);
      maxArea = Math.max(current, maxArea);
      left++;
    } else {
      let current = height[right] * (right - left);
      maxArea = Math.max(current, maxArea);
      right--;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 0, 0, 0, 0, 0, 0, 2, 2]));
