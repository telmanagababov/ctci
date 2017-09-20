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
        return this.items.length === 0;
    }
}

module.exports = Queue;