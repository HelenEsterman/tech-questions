/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // remove duplicates without creating copy of array
  let index = 0;
  for (let num of nums) {
    if (num !== nums[index]) {
      nums.shift();
      index++;
    }
  }

  console.log(nums);
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);
