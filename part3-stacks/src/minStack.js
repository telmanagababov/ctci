const Stack = require("../common/Stack");

class MinStack extends Stack {
    constructor() {
        super();
        this.minOrder = new Stack();
    }

    push(item) {
        super.push(item);
        let minItem = this.minOrder.peek();
        if(minItem === undefined || item < minItem) {
            minItem = item;
        }
        this.minOrder.push(minItem);
    }

    pop() {
        this.minOrder.pop();
        return super.pop();
    }

    min() {
        return this.minOrder.peek();
    }
}

module.exports = MinStack;