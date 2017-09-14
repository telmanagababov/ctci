const list = require('../common/list');

function getElementToLast(head, indexToLast) {
    let nodeToLast = head,
        node = getNodeByIndex(head, indexToLast);
    while(node.next) {
        node = node.next;
        nodeToLast = nodeToLast.next;
    }
    return nodeToLast;
}

function getNodeByIndex(head, index) {
    let node = head;
    for(let i = 0; i < index; i++) {
        node = node.next;
    }
    return node;
}

module.exports = getElementToLast;