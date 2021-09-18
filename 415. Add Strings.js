/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addCarry = function (num, carry) {
    if (carry == 0) return num;

    let res = '', i = num.length - 1;
    while (i >= 0) {
        let n = parseInt(num[i]) + carry;
        carry = 0;
        if (n > 9) {
            carry = 1;
            n = n % 10;
        }
        res = String(n) + res;
        i--;
    }
    if (i >= 0) {
        let n = addCarry(num1.substr(0, i + 1), carry);
        res = String(n) + res;
    } else if (carry == 1) {
        res = '1' + res;
    }
    return res;

}
var addStrings = function (num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, carry = 0, res = '';
    while (i >= 0 && j >= 0) {
        let n = parseInt(num1[i]) + parseInt(num2[j]) + carry;
        carry = 0;
        if (n > 9) {
            carry = 1;
            n = n % 10;
        }
        res = String(n) + res;
        i--;
        j--;
    }
    if (j >= 0) {
        let n = addCarry(num2.substr(0, j + 1), carry);
        res = String(n) + res;
    } else if (i >= 0) {
        let n = addCarry(num1.substr(0, i + 1), carry);
        res = String(n) + res;
    } else if (carry == 1) {
        res = '1' + res;
    }
    return res;
};
