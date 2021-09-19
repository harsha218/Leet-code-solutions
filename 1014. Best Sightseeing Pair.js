/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    let max = 0, cur = 0;
    for (let i of values) {
        max = Math.max(cur + i, max);
        cur = Math.max(i, cur) - 1;
    }
    return max;
};