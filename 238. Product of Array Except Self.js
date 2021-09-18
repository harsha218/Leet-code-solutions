/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let product = 1, flag = 0;
    for (let i of nums) {
        if (i != 0) product *= i;
        else flag++;
    }
    let res = [];
    for (let i of nums) {
        if (flag > 1) res.push(0);
        else if (i == 0) res.push(product);
        else if (flag == 0) res.push(product / i);
        else res.push(0);
    }
    return res
};