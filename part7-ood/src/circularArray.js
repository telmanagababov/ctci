class CircularArray extends Array {
    constructor() {
        super();
    }

    rotateLeft() {
        this.push(this.shift());
    }
    
    rotateRight() {
        this.unshift(this.pop());
    }
}

let array = new CircularArray();
array.push(1, 2, 3, 4, 5, 6);
console.log('initial: ', array);
array.rotateLeft();
console.log('rotate-left: ', array);
array.rotateLeft();
console.log('rotate-left: ', array);
array.rotateRight();
console.log('rotate-right: ', array);
