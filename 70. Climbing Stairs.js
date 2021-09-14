/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let map = {}
    const helper = (n) => {
        if (n == 0) return 1;
        if (n < 0) return 0;
        if (map[n - 1] === undefined) map[n - 1] = helper(n - 1);
        if (map[n - 2] === undefined) map[n - 2] = helper(n - 2);
        return map[n - 1] + map[n - 2];
    }
    return helper(n);
};