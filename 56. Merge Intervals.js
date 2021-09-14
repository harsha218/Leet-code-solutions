/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (ip) {
    if (ip.length == 0) return [];
    if (ip.length == 1) return ip;
    ip.sort((a, b) => a[0] - b[0]);
    let res = [ip[0]];

    for (let i of ip) {
        if (res[res.length - 1][1] >= i[0]) {
            res[res.length - 1][1] = Math.max(i[1], res[res.length - 1][1]);
        } else {
            res.push(i);
        }
    }
    return res;
};