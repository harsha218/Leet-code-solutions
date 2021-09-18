/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let i = 0, j = 0, curr = nums[0];
    let min = nums.length + 1;
    while (i <= j && j < nums.length) {
        if (curr < target) {
            j++;
            curr += nums[j];
        } else if (curr >= target) {
            let res = j - i + 1;
            min = Math.min(res, min);
            curr -= nums[i];
            i++;
        }
    }
    if (min == nums.length + 1) {
        min = 0;
    }
    return min;
};