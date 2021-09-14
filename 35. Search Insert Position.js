/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let low = 0, high = nums.length - 1;
    if (target <= nums[low]) return low;
    if (target > nums[high]) return high + 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) {
            if (mid == 0) return mid;
            else if (nums[mid - 1] < target) return mid;
            else high = mid - 1;
        } else {
            if (mid == nums.length - 1) return mid;
            else if (nums[mid + 1] > target) return mid + 1;
            else low = mid + 1;
        }
    }
};