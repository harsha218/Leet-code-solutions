/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let arr = new Array(10000).fill(0);
    for (let i of nums) {
        arr[i] += i;
    }
    arr[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i] + arr[i - 2]);
    }
    return arr[arr.length - 1];
};