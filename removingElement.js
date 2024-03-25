/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // remove all 'val' values in 'nums' array
  // return final 'nums[i]' when all 'val' removed from 'num'
  nums.sort((a, b) => {
    if (a === val) {
      return 1;
    }
    if (b === val) {
      return 1;
    }
  });
  console.log(nums);
};
