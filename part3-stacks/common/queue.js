class Queue {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    remove() {
        return this.items.shift();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length > 0;
    }
}

function createQueue(items) {
    let stack = new Queue();
    items.forEach(item => stack.add(item));
    return stack;
}

module.exports = {Queue, createQueue};