/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let first = [1];
    let second = [1, 1];
    if (rowIndex == 0) return first;
    if (rowIndex == 1) return second;
    for (let i = 2; i <= rowIndex; i++) {
        if (i % 2 == 0) {
            first.push(1);
            first.push(1);
            for (let j = 0; j < second.length - 1; j++) {
                first[j + 1] = second[j] + second[j + 1];
            }
        } else {
            second.push(1);
            second.push(1);
            for (let j = 0; j < first.length - 1; j++) {
                second[j + 1] = first[j] + first[j + 1];
            }
        }
    }
    if (rowIndex % 2 != 0) return second;
    else return first;
};