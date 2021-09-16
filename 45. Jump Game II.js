/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let cap = nums[0], secondaryCap = nums[0], jumps = 1;
    if (nums.length == 1) return 0;
    if (cap == 0) return false;
    for (let i = 1; i < nums.length; i++) {
        if (i == nums.length - 1) continue;
        cap--;
        secondaryCap--;
        if (secondaryCap < nums[i]) secondaryCap = nums[i];
        if (cap == 0) {
            if (secondaryCap == 0) return false;
            else {
                cap = secondaryCap;
                jumps++;
            }
        }
    }
    return jumps;
};