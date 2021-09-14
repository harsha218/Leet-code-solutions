/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let map = {}
    const helper = (n) => {
        if (n == cost.length - 1) return cost[n];
        else if (n > cost.length - 1) return 0;
        if (map[n + 1] === undefined) map[n + 1] = helper(n + 1);
        if (map[n + 2] === undefined) map[n + 2] = helper(n + 2);
        return Math.min(map[n + 1], map[n + 2]) + cost[n];
    }
    return Math.min(helper(0), helper(1));
};