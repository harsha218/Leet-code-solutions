/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [[]];
    for (let i of nums) {
        let subRes = [...res];
        for (let j of subRes) {
            res.push([...j, i]);
        }
    }
    return res;
};