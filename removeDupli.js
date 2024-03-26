/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // remove duplicates without creating copy of array
  for (i = 0; i < nums.length; i++) {
    for (j = i++; j < nums.length; i++) {
      if (nums[i] === nums[j]) {
        nums.shift();
      }
    }
  }
};

const nums = [1, 1, 2];

console.log(removeDuplicates(nums));
