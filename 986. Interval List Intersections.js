/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (first, second) {
    let ans = [];
    let i = 0, j = 0;
    while (i < first.length && j < second.length) {
        let one = first[i], two = second[j];
        if (one[0] >= two[0] && one[1] <= two[1]) {
            ans.push([one[0], one[1]]);
            i++;
        } else if (two[0] >= one[0] && two[1] <= one[1]) {
            ans.push([two[0], two[1]]);
            j++;
        } else if (one[1] >= two[0] && one[0] <= two[0]) {
            ans.push([two[0], one[1]]);
            i++;
        } else if (two[1] >= one[0] && two[0] <= one[0]) {
            ans.push([one[0], two[1]]);
            j++;
        } else if (one[0] > two[1]) {
            j++;
        } else if (two[0] > one[1]) {
            i++;
        }
    }
    return ans;
};