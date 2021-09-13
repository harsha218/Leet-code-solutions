/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let map = {};
    map[0] = 0;
    map[1] = 1;
    map[2] = 1;
    let helper = (n) => {
        if (map[n] !== undefined) return map[n];
        map[n] = helper(n - 1) + helper(n - 2) + helper(n - 3);
        return map[n];
    }
    return helper(n);
};