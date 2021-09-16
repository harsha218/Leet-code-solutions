/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let ss = [];
    let ts = [];
    for (let i of s) {
        if (i == '#') ss.pop();
        else ss.push(i);
    }
    for (let i of t) {
        if (i == '#') ts.pop();
        else ts.push(i);
    }
    if (ss.length != ts.length) return false;
    for (let i in ss) {
        if (ss[i] != ts[i]) return false;
    }
    return true;
};