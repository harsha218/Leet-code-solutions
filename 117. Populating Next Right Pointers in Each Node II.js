/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root == null) return root;

    let q = [[root, 1]];
    while (q.length) {
        let [curr, level] = q.shift();
        if (q.length) {
            let [next, nextlevel] = q[0];
            if (level == nextlevel) curr.next = next;
        }
        if (curr.left) q.push([curr.left, level + 1]);
        if (curr.right) q.push([curr.right, level + 1]);

    }
    return root
};