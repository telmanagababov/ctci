const list = require('../common/list');

/* A solution with a buffer */ 
function removeDuplicates(head) {
    let node = head,
        items = new Set();
    while(node) {
        if(items.has(node.value)) {
            list.deleteNode(head, node);
        } else {
            items.add(node.value);
        }
        node = node.next;
    }
    return head;
}

/* A solution without a buffer
function removeDuplicates(head) {
    let node = head;
    while(node) {
        removeRootDuplicates(node);
        node = node.next;
    }
    return head;
}

function removeRootDuplicates(head) {
    let node = head.next;
    while(node) {
        if(node.value === head.value) {
            list.deleteNode(head, node);
        }
        node = node.next;
    }
    return head;
} */

module.exports = removeDuplicates;