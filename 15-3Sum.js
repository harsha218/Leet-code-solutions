/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return [];
    let res = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break
        if (i != 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (nums[j] === nums[j - 1]) j++
                while (nums[k] === nums[k + 1]) k--
            }
            else if (sum < 0) j++;
            else k--;
        }
    }
    return res;
};