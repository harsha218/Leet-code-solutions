/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var valid = function (x, y, m, n) {
    return x >= 0 && y >= 0 && x < m && y < n;
}
var solve = function (board) {
    let q = [];
    let m = board.length, n = board[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0 || i == m - 1 || j == n - 1) {
                if (board[i][j] == "O") q.push([i, j]);
            }
        }
    }
    let res = [];
    while (q.length) {
        let [x, y] = q.shift();
        res.push([x, y]);
        board[x][y] = "X";
        let options = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let op of options) {
            let [i, j] = op;
            if (valid(x + i, y + j, m, n) && board[x + i][y + j] == "O") {
                q.push([x + i, y + j]);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = "X"
        }
    }
    for (let op of res) {
        let [x, y] = op;
        board[x][y] = "O";
    }
};