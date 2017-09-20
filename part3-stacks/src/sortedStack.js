const Stack = require("../common/Stack");

class SortedStack {
    constructor() {
        this.items = new Stack();
    }

    push(item) {
        let lowerItems = getLowerItems(this.items, item);
        this.items.push(item);
        moveItems(this.items, lowerItems)
    }

    pop() {
        return this.items.pop();
    }
    
    peek() {
        return this.items.peek();
    }

    isEmpty() {
        return this.items.isEmpty();
    }
}

function getLowerItems(target, item) {
    let lowerItems = new Stack();
    while(!target.isEmpty()) {
        if(item >= target.peek()) {
            lowerItems.push(target.pop());
        } else {
            break;
        }
    }
    return lowerItems;
}

function moveItems(target, source) {
    while(!source.isEmpty()) {
        target.push(source.pop());
    }
}

module.exports = SortedStack;