/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    for (let row = 0; row < Math.floor(matrix.length / 2); row++) {
        [matrix[row], matrix[matrix.length - row - 1]] = [matrix[matrix.length - row - 1], matrix[row]];
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = row + 1; col < matrix.length; col++) {
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
        }
    }
};