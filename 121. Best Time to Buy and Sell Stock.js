/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity, maxProfit = 0;
    for (let i of prices) {
        minPrice = Math.min(minPrice, i);
        maxProfit = Math.max(maxProfit, i - minPrice);
    }
    return maxProfit;
};