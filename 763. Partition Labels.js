/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let mp = {};
    for (let i in s) {
        mp[s[i]] = i;
    }
    let indArr = [];
    for (let i in s) {
        indArr.push(mp[s[i]]);
    }
    let curr = 0, res = [], sum = 0;
    for (let i in indArr) {
        curr = Math.max(curr, indArr[i]);
        if (i >= curr) {
            let num = parseInt(i) - sum + 1;
            sum += num
            res.push(num)
        };
    }
    return res;
};