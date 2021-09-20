/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    let n = grid.length;
    if (n == 0 || grid[n - 1][n - 1] == 1 || grid[0][0] == 1) return -1;

    let level = 1;
    let q = [[0, 0]];
    while (q.length) {
        let size = q.length;
        while (size--) {
            let [x, y] = q.shift();

            if (x == n - 1 && y == n - 1) return level;

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i == 0 && j == 0) continue;
                    if (x + i < 0 || y + j < 0 || x + i >= n || y + j >= n) continue;
                    if (grid[x + i][y + j] == 0) {
                        grid[x + i][y + j] = 1;
                        q.push([x + i, y + j]);
                    }
                }
            }
        }
        level++;
    }
    return -1;
};