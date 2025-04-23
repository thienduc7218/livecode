class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummy = new ListNode();
    let current = dummy;
    while (l1 || l2 || carry) {
        console.log("🚀~ l1 before sum:", l1)
        console.log("🚀~ l2 before sum:", l2)
        console.log("🚀~ current before sum:", current)

        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        console.log("🚀~ sum:", sum)

        carry = Math.floor(sum / 10);
        console.log("🚀~ carry:", carry)

        current.next = new ListNode(sum % 10);
        current = current.next;
        console.log("🚀~ current after sum:", current)

        l1 = l1 ? l1.next : null;
        console.log("🚀~ l1 after sum:", l1)
        l2 = l2 ? l2.next : null;
        console.log("🚀~ l2 after sum:", l2)
    }

    return dummy.next;

};


const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2)) // Output: [7, 0, 8]