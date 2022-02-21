/* Q. Two Sum by LeetCode

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the anser in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/

var twoSum = function(nums, target) {
//   var result = [];
//       for (var element of nums) {
//           for (var i = 0; i < nums.length; i++) {
//               if (element+nums[i] === target && nums.indexOf(element) !== i) {
//                   result.push(nums.indexOf(element), i);
//                   nums.splice(nums.indexOf(element),1);
//               }
//           }
//       }
//   return result;
// ---- time complexity O(N^2) ----

    const map = {};
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.hasOwnProperty(diff)) {
            result.push(map[diff]);
            result.push(i);

            console.log (result);
        } else {
            map[nums[i]] = i;
        }
    }
};

// input : nums, target
// output : array with first element's index and the last's index.