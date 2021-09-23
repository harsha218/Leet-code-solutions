/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    const helper = (arr, curr = []) => {
        res.push([...curr]);
        for (let i = 0; i < arr.length; i++) {
            if (i == 0 || arr[i] != arr[i - 1]) {
                curr.push(arr[i]);
                helper(arr.slice(i + 1), curr);
                curr.pop();
            }
        }
    }

    helper(nums);
    return res;
};
