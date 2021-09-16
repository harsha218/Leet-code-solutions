/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let arr = new Array(n).fill().map(() => new Array(n).fill(0));
    let i = 0, j = 0, iMin = 0, jMin = -1, iMax = n, jMax = n, num = 1;
    while (iMin < iMax && jMin < jMax) {
        while (j < jMax) {
            arr[i][j++] = num++;
        }
        jMax--;
        j--;
        i++;

        while (i < iMax) {
            arr[i++][j] = num++;
        }
        iMax--;
        i--;
        j--;

        while (j > jMin) {
            arr[i][j--] = num++;
        }
        jMin++;
        j++;
        i--;

        while (i > iMin) {
            arr[i--][j] = num++;
        }
        iMin++;
        i++;
        j++;
    }

    return arr;
};