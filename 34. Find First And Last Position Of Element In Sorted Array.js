/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let res = [-1, -1];
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (nums[mid] == target) {
            let left = mid, right = mid;
            while (left >= 0 && nums[left - 1] == target) {
                left--;
            }
            while (right < nums.length && nums[right + 1] == target) {
                right++;
            }
            return [left, right];
        }
        else if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return res;
};