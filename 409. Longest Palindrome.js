/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = {}
    for (let i of s) {
        if (map[i] === undefined) map[i] = 1;
        else map[i] += 1;
    }
    let count = 0, flag = 0;
    for (let i in map) {
        if (map[i] % 2 == 1) flag = 1;
        count += map[i] - map[i] % 2;
    }
    return count + flag;
};
