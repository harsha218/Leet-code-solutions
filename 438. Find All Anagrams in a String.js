/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var compare = function (a, b) {
    if (Object.keys(a).length != Object.keys(b).length) return false;
    for (let i of Object.keys(a)) {
        if (a[i] != b[i]) return false;
    }
    return true;
}
var findAnagrams = function (s, p) {
    let res = [];
    let sMap = {};
    let pMap = {};

    for (let i of p) {
        if (pMap[i] === undefined) pMap[i] = 1;
        else pMap[i] += 1
    }
    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]] == undefined) sMap[s[i]] = 1;
        else sMap[s[i]] += 1;

        if (i >= p.length) {
            sMap[s[i - p.length]] -= 1;
            if (sMap[s[i - p.length]] == 0) {
                delete sMap[s[i - p.length]];
            }
        }
        if (compare(sMap, pMap)) res.push(i - p.length + 1);
    }
    return res;
};