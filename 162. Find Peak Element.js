/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let low = 0, high = nums.length - 1;
    if (high == 0 || nums[0] > nums[1]) return 0;
    else if (nums[high] > nums[high - 1]) return high;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
        else if (nums[mid] < nums[mid - 1]) high = mid;
        else low = mid;
    }
};