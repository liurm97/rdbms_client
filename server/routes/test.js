"use strict";

let nums = [3, 3];
const target = 6;
// console.log(nums);

// if (target % 2 === 1) {
//   for (let i = 0; i < nums.length; ++i) {
//     let remaining = target - nums[i];
//     console.log(remaining);
//     if (nums.indexOf(remaining) > 0) return [i, nums.indexOf(remaining)];
//     // console.log(`i: ${i} - value: ${nums[i]}`);
//     // return [i, nums.indexOf(target - nums[i])];
//   }
// }

for (let i = 0; i < nums.length; i++) {
  let remaining = target - nums[i];
  let index = nums.indexOf(remaining, i + 1);
  console.log(remaining, index);
  if (index > i) return [i, index];
}
