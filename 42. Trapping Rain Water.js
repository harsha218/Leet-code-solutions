/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let leftHigh = new Array(n).fill(0), rightHigh = new Array(n).fill(0);

    leftHigh[0] = height[0];
    rightHigh[n - 1] = height[n - 1];

    for (let i = 1; i < n; i++) {
        leftHigh[i] = Math.max(height[i], leftHigh[i - 1]);
    }
    for (let i = n - 2; i >= 0; i--) {
        rightHigh[i] = Math.max(height[i], rightHigh[i + 1]);
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        let level = Math.min(leftHigh[i], rightHigh[i]);
        if (level > height[i]) {
            res += level - height[i];
        }
    }
    return res;
};