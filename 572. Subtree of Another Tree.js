/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var check = function (root1, root2) {
    if ((root1 == null && root2 != null) || (root1 != null && root2 == null)) return false;
    if (root1 == null && root2 == null) return true;
    if (root1.val != root2.val) return false;
    if (!check(root1.left, root2.left)) return false;
    if (!check(root1.right, root2.right)) return false;
    return true;
}
var isSubtree = function (root, subRoot) {
    if (subRoot == null) return true;
    if (root == null) return false;

    let q = [root];

    while (q.length) {
        let curr = q.shift();

        if (curr == null) continue;
        else if (check(curr, subRoot)) return true;

        if (curr.left) q.push(curr.left);
        if (curr.right) q.push(curr.right);
    }
    return false;
};