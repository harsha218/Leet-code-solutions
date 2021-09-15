/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let map = {};

    const helper = (n) => {
        if (n >= nums.length) return 0;
        if (map[n + 2] === undefined) map[n + 2] = helper(n + 2);
        if (map[n + 3] === undefined) map[n + 3] = helper(n + 3);
        return Math.max(map[n + 2], map[n + 3]) + nums[n]
    }
    return Math.max(helper(0), helper(1));
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0];
    nums[1] = Math.max(nums[1], nums[0]);
    for (let i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i - 1], nums[i] + nums[i - 2]);
    }
    return nums[nums.length - 1];
};