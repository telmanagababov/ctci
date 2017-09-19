const Stack = require("../common/Stack");

class SubStacks {
    constructor(maxDepth) {
        this.maxDepth = maxDepth;
        this.stacks = [];
        this.sizes = [];
    }

    push(item) {
        let stackIndex = this.stacks.length - 1;
        if(stackIndex < 0 || this.sizes[stackIndex] === this.maxDepth) {
            stackIndex++;
            this.stacks[stackIndex] = new Stack();
            this.sizes[stackIndex] = 0;
        }
        this.stacks[stackIndex].push(item);
        this.sizes[stackIndex]++;
    }

    pop() {
        let stackIndex = this.stacks.length - 1;
        return this.popAt(stackIndex);
    }

    popAt(stackIndex) {
        let stack = this.stacks[stackIndex],
            item = stack.pop();
        if (stack.isEmpty()) {
            this.stacks.splice(stackIndex, 1);
        }
        this.sizes[stackIndex]--;
        return item;
    }

    peek() {
        let stackIndex = this.stacks.length - 1,
            stack = this.stacks[stackIndex];
        return stack.peek();
    }

    isEmpty() {
        return this.stacks.length === 0;
    }
}

module.exports = SubStacks;