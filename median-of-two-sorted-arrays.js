/**
 * @param {string} s
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let newArray = [];

  newArray = [...nums1, ...nums2];

  newArray.sort((a, b) => {
    return a - b;
  });

  const newArrayLength = newArray.length;

  if (newArrayLength % 2 === 0) {
    return (
      (newArray[newArrayLength / 2 - 1] + newArray[newArrayLength / 2]) / 2
    );
  } else {
    return newArray[(newArrayLength - 1) / 2];
  }
};
