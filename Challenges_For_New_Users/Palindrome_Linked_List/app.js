/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let values = [];
    // push value of node into array
    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < values.length >> 1; i++) {
        if (values[i] !== values[values.length - i - 1]) return false;
    }
    return true;
};