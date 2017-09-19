class ThreeStacks {
    constructor() {
        this.indexes = {};
        this.items = [];
    }

    push(stackId, item) {
        if(this.indexes[stackId] === undefined) {
            this.indexes[stackId] = stackId;
        } else {
            this.indexes[stackId] += 3;
        }
        let index = this.indexes[stackId];
        this.items[index] = item;
    }

    pop(stackId) {
        let index = this.indexes[stackId],
            item = this.items[index];
        this.items[index] = undefined;
        this.indexes[stackId] = index >= 3 ? index - 3 : undefined;
        return item;
    }

    peek(stackId) {
        let index = this.indexes[stackId],
            item = this.items[index];
        return item;
    }

    isEmpty(stackId) {
        let index = this.indexes[stackId];
        return index === undefined;
    }
}

module.exports = ThreeStacks;