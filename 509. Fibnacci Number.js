/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let map = {};
    map[0] = 0;
    map[1] = 1;
    const helper = (num) => {
        if (map[num] !== undefined) return map[num];
        map[num] = helper(num - 1) + helper(num - 2);
        return map[num];
    }
    return helper(n);
};