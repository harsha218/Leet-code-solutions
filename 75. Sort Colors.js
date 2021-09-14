/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let low = 0, high = nums.length - 1, ptr = 0;
    while (ptr <= high) {
        if (nums[ptr] === 0) {
            [nums[low], nums[ptr]] = [nums[ptr], nums[low]];
            ptr++;
            low++;
        } else if (nums[ptr] === 2) {
            [nums[high], nums[ptr]] = [nums[ptr], nums[high]];
            high--;
        } else {
            ptr++
        }
    }
};