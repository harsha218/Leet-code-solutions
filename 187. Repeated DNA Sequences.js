/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let seen = new Set(), repeated = new Set();
    for (let i = 0; i + 9 < s.length; i++) {
        let seq = s.substr(i, 10);
        if (seen.has(seq)) {
            repeated.add(seq);
        } else {
            seen.add(seq);
        }
    }
    return [...repeated];
};