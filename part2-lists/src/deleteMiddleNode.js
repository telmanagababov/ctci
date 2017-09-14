const list = require('../common/list');

function deleteMiddleNode(node) {
    node.value = node.next.value;
    node.next = node.next.next;
}

module.exports = deleteMiddleNode;