/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let low = 0, high = nums.length - 1;

    let ans = Math.min(nums[low], nums[high]);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        ans = Math.min(ans, nums[mid]);
        if (nums[low] <= nums[high]) high = mid - 1;
        else {
            if (nums[low] >= nums[mid]) {
                if (nums[mid] > nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            } else {
                low = mid + 1;
            }
        }
    }
    return ans;
};