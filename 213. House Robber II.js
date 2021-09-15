/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0];
    const helper = (arr) => {
        if (arr.length == 1) return arr[0];
        arr[1] = Math.max(arr[0], arr[1]);
        for (let i = 2; i < arr.length; i++) {
            arr[i] = Math.max(arr[i - 1], arr[i] + arr[i - 2]);
        }
        return arr[arr.length - 1];
    }
    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)))
};