const list = require('../common/list');

let input = list.create([1, 3, 4, 3]);
getCycle(input)

function getCycle(head) {
    let node = head,
        traversedNodes = new Set();
    while (node) {
        if (traversedNodes.has(node)) {
            return node;
        } else {
            traversedNodes.add(node);
        }
        node = node.next;
    }
    return null;
}

module.exports = getCycle;