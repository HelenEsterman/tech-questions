/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // remove all 'val' values in 'nums' array
  nums.sort((a, b) => {
    //if a from 'nums' is equal to 'val'
    if (a === val) {
      // then return index number 1 to move all 'val' values to end of 'nums' array
      return 1;
    }
    //if b from 'nums' is equal to 'val'
    if (b === val) {
      // then return index number -1 to make sure all 'val' values of 'nums' get ordered before the rest of the 'nums' values
      return -1;
    }
    // the rest of the 'nums' values get ordered in ascending order
    return a - b;
  });
  //   the '.pop()' method will make the array 'nums' shorter every time but starting at the for loop at the end of the array going in descending order accounts for the array 'nums' shrinking every iteration
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      // remove all 'val' values from 'nums' array
      nums.pop();
    }
  }
  // return final 'nums[i]' when all 'val' removed from 'num'
  return nums.length;
};

Nums = [0, 1, 2, 2, 3, 0, 4, 2];
Val = 2;

removeElement(Nums, Val);
