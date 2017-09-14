const Node = require('./node');

function create(data) {
    let rootNode = null,
        lastNode = null;
    data.forEach(item => {
        let node = new Node(item);
        if(!rootNode) {
            rootNode = node;
        } else {
            lastNode.next = node;
        }
        lastNode = node;
    });
    return rootNode;
}

function traverse(list, callback) {
    let node = list;
    while(node) {
        callback(node.value);
        node = node.next;
    }
}

function flatten(list) {
    let array = [],
        node = list;
    while(node) {
        array.push(node.value);
        node = node.next;
    }
    return array;
}

function deleteMiddleNode(node) {
    node.value = node.next.value;
    node.next = node.next.next;
}

function deleteNode(head, removeNode) {
    let node = head;
    if(node === removeNode) {
        return head.next;
    }
    while(node.next) {
        if(node.next === removeNode) {
            node.next = node.next.next;
            return head;
        }
        node = node.next;
    }
    return head;
}

module.exports = {create, traverse, flatten, deleteNode, deleteMiddleNode};