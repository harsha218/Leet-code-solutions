/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = nums[0], localMin = nums[0], localMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let a = Math.max(localMax * nums[i], nums[i], localMin * nums[i]);
        let b = Math.min(localMax * nums[i], nums[i], localMin * nums[i]);
        localMax = a;
        localMin = b;
        res = Math.max(a, b, res);
    }
    return res;
};