/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {};
    for (let i of nums) {
        if (map[i] === undefined) map[i] = 1;
        else map[i] = 2;
    }
    for (let i of Object.keys(map)) {
        if (map[i] == 1) return i;
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let res = 0;
    for(let i of nums) {
        res ^= i;
    }
    return res;
};