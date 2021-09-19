/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let sl = s.split(' ');
    if (pattern.length != sl.length) return false;
    let mp = {};
    let rmp = {};
    for (let i in pattern) {
        let pt = pattern[i];
        if (mp[pt] !== undefined) {
            if (mp[pt] != sl[i]) return false;
        } else {
            mp[pt] = sl[i];
        }
        if (rmp[sl[i]] !== undefined) {
            if (rmp[sl[i]] != pt) return false;
        } else {
            rmp[sl[i]] = pt;
        }
    }
    return true;
};