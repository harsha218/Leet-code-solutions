/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var helper = function (isConnected, i, count, res) {
    if (res[i] != 0) return;
    res[i] = count;
    for (let j = 0; j < isConnected[i].length; j++) {
        if (i == j || isConnected[i][j] == 0) continue;
        helper(isConnected, j, count, res);
    }
}
var findCircleNum = function (isConnected) {
    let res = new Array(isConnected.length).fill(0), count = 0;

    for (let i = 0; i < isConnected.length; i++) {
        if (res[i] != 0) continue;
        count++;
        res[i] = count;
        for (let j = 0; j < isConnected[i].length; j++) {
            if (i == j || isConnected[i][j] == 0) continue;
            helper(isConnected, j, count, res);
        }
    }
    return count;
};