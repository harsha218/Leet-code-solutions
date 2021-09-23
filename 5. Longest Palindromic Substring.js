/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0));
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1;
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            dp[i][i + 1] = 1;
            start = i;
            end = i + 1;
        }
    }
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 2; j < s.length; j++) {
            if (dp[i + 1][j - 1] == 1 && s[i] == s[j]) {
                dp[i][j] = 1;
                if (j - i > end - start) {
                    start = i;
                    end = j;
                }
            }
        }
    }
    return s.substring(start, end + 1);
};