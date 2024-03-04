let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

var merge = function (nums1, m, nums2, n) {
  for (num of nums2) {
    nums1.push(num);
  }
  if (nums1.length !== m + n) {
    nums1.splice(m, n);
  }
  console.log(nums1);
};

merge(nums1, m, nums2, n);
