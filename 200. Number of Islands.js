/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    const helper = (grid, i, j) => {
        if (i >= 0 && j >= 0 && i < grid.length && j < grid[0].length && grid[i][j] == "1") {
            grid[i][j] = "#";
            helper(grid, parseInt(i) + 1, j);
            helper(grid, i, parseInt(j) + 1);
            helper(grid, parseInt(i) - 1, j);
            helper(grid, i, parseInt(j) - 1);
        } else {
            return;
        }
    }

    for (let i in grid) {
        for (let j in grid[i]) {
            if (grid[i][j] == "1") {
                helper(grid, i, j);
                count++
            }
        }
    }
    return count;
};