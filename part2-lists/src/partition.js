const list = require('../common/list');

function partition(head, x) {
    let node = head,
        lowerPartHead = null,
        lowerPartTail = null,
        biggerPartHead = null,
        biggerPartTail = null;

    while(node) {
        if(node.value < x) {
            if(lowerPartTail) {
                lowerPartTail.next = node;
            } else {
                lowerPartHead = node;
            }
            lowerPartTail = node;
        } else {
            if(biggerPartTail) {
                biggerPartTail.next = node;
            } else {
                biggerPartHead = node;
            }
            biggerPartTail = node;
        }
        node = node.next;
    }

    if(lowerPartHead && biggerPartHead) {
        head.value = lowerPartHead.value;
        head.next = lowerPartHead.next;
        lowerPartTail.next = biggerPartHead;
        biggerPartTail.next = null;
    }
    
    return head;
}

module.exports = partition;