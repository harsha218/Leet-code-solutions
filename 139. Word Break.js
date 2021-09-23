/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict, map = {}) {
    if (s == '') return true;

    if (map[s] !== undefined) return map[s];

    for (let i = 1; i <= s.length; i++) {
        let newS = s.slice(0, i);
        if (wordDict.indexOf(newS) != -1) {
            map[s.slice(i)] = wordBreak(s.slice(i), wordDict, map);
            if (map[s.slice(i)] == true) {
                map[s] = true;
                return true
            }
        }
    }

    map[s] = false;
    return false;
};