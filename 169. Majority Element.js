/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let maj = nums[0], count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            count = 1;
            maj = nums[i];
        }
        else if (nums[i] == maj) count++;
        else count--;
    }
    return maj;
};