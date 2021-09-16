/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    if (intervals.length == 1) return 0;
    intervals.sort((a, b) => a[1] - b[1]);

    let ans = 0;
    let prev = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (prev > intervals[i][0]) {
            ans++;
        } else {
            prev = intervals[i][1];
        }
    }
    return ans;
};