/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let low = 1, high = n;
        while (low <= n) {
            let mid = Math.floor((high + low) / 2);
            if (isBadVersion(mid) == true) {
                if (mid == 1 || isBadVersion(mid - 1) == false) return mid;
                else high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    };
};