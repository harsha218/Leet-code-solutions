/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let cap = nums[0], secondaryCap = nums[0];
    if (nums.length == 1) return true;
    if (cap == 0) return false;
    for (let i = 1; i < nums.length; i++) {
        if (i == nums.length - 1) return true;
        cap--;
        secondaryCap--;
        if (secondaryCap < nums[i]) secondaryCap = nums[i];
        if (cap == 0) {
            if (secondaryCap == 0) return false;
            cap = secondaryCap;
        }
    }
    return true;
};