const Node = require('./node');

function create(data) {
    let head = new Node(data[0]),
        tail = head;
    for(let i = 1; i < data.length; i++) {
        tail.next = new Node(data[i]);
        tail = tail.next;
    }
    return head;
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

function addNode(head, addNode) {
    let node = head;
    while(node.next) {
        node = node.next;
    }
    node.next = addNode;
    return head;
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

module.exports = {create, flatten, addNode, deleteNode};