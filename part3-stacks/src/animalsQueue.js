const Queue = require("../common/queue");

class AnimalsQueue {
    constructor() {
        this.items = new Queue();
    }

    enqueue(type, item) {
        this.items.add({type, item});
    }
    
    dequeueAny() {
        return this.items.remove().item;
    }
    
    dequeueDog() {
        return remove(this.items, 'dog').item;
    }
    
    dequeueCat() {
        return remove(this.items, 'cat').item;
    }
}

function remove(source, type) {
    let item = null,
        copy = new Queue();
    while(!source.isEmpty()) {
        let copyItem = source.remove();
        if(item === null && copyItem.type === type) {
            item = copyItem;
        } else {
            copy.add(copyItem);
        }
    }
    while(!copy.isEmpty()) {
        source.add(copy.remove());
    }
    return item;
}

module.exports = AnimalsQueue;