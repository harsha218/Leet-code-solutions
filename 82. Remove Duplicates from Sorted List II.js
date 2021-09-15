/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let cur = head, prev = null;

    while (cur && cur.next) {
        if (cur.val == cur.next.val) {
            while (cur && cur.next && cur.val == cur.next.val) {
                cur = cur.next;
            }
            cur = cur.next;
            if (prev == null) {
                head = cur;
            } else {
                prev.next = cur;
            }
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return head;
};