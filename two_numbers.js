// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {

    //create an array from the numbers
    const firstArray =[];
    const secondArray =[];

    while (l1.next != undefined){
        firstArray.push(l1.val);
        l1.val=l1.next;

    }
    while (l2.next != undefined){
        secondArray.push(l2.val);
        l2.val=l2.next;

    }

    return firstArray.reverse().join() + secondArray.reverse().join()

    
};

