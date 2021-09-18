/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums, sign) {
    let res = nums[0], cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (sign == -1) {
            cur = Math.min(cur + nums[i], nums[i]);
            res = Math.min(cur, res);
        } else {
            cur = Math.max(cur + nums[i], nums[i]);
            res = Math.max(cur, res);
        }

    }
    return res;
};
var maxSubarraySumCircular = function (nums) {
    let total = 0;
    for (let i of nums) {
        total += i;
    };
    let curMin = maxSubArray(nums, -1);
    let curMax = maxSubArray(nums, 1);
    if (total == curMin) return curMax;
    else return Math.max(curMax, total - curMin)
};