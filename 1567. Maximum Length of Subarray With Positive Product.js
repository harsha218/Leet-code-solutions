/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
    let res = 0, pCounter = 0, nCounter = 0;
    if (nums[0] > 0) {
        res = 1;
        pCounter = 1;
    } else if (nums[0] < 0) {
        nCounter = 1;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > 0) {
            pCounter++;
            if (nCounter > 0) nCounter++;
        } else if (nums[i] < 0) {
            temp = nCounter;
            nCounter = pCounter + 1;
            if (temp > 0) pCounter = temp + 1;
            else pCounter = 0;
        } else {
            pCounter = 0;
            nCounter = 0;
        }
        res = Math.max(res, pCounter);
    }
    return res;
};