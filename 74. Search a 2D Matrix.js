/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let col = 0, row = 0;
    while(row < matrix.length) {
        if(matrix[row][col] < target) row++;
        else if(matrix[row][col] == target) return true;
        else break;
    }
    row--;
    if(row < 0 || row == matrix.length) return false;
    while(col < matrix[0].length) {
        if(matrix[row][col] < target) col++;
        else if(matrix[row][col] == target) return true;
        else break;
    }
    return false;
};