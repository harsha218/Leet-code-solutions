/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let i = 0, res = 0;
    while (i < nums.length) {
        let curr = 1;
        for (let j = i; j < nums.length; j++) {
            curr *= nums[j];
            if (curr < k) res++;
            else break;
        }
        i++;
    }
    return res;
};