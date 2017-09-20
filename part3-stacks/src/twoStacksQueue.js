const Stack = require("../common/Stack");

class TwoStacksQueue {
    constructor() {
        this.items = new Stack();
        this.reversedItems = new Stack();
    }

    add(item) {
        this.items.push(item);
    }

    remove() {
        let removedItem = null;
        moveItems(this.reversedItems, this.items);
        removedItem = this.reversedItems.pop();
        moveItems(this.items, this.reversedItems);
        return removedItem;
    }
    
    peek() {
        let peekedItem = null;
        moveItems(this.reversedItems, this.items);
        peekedItem = this.reversedItems.peek();
        moveItems(this.items, this.reversedItems);
        return peekedItem;
    }

    isEmpty() {
        return this.items.isEmpty();
    }
}

function moveItems(target, source) {
    while(!source.isEmpty()) {
        target.push(source.pop());
    }
}

module.exports = TwoStacksQueue;