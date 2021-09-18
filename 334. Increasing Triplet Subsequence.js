/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let c1 = Infinity, c2 = Infinity;
    for (let i of nums) {
        if (i <= c1) c1 = i;
        else if (i <= c2) c2 = i;
        else return true;
    }
    return false;
};