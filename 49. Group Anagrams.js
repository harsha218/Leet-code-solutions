/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let str of strs) {
        let arr = new Array(26).fill(0);
        for (let j in str) {
            let ind = str.charCodeAt(j) - "a".charCodeAt(0);
            arr[ind] += 1;
        }
        let code = arr.join(',');
        if (map[code] === undefined) map[code] = [str];
        else map[code].push(str);
    }
    return Object.values(map);
};