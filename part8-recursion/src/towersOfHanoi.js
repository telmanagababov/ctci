function moveDisks(size, source, target, buffer) {
    if (size <= 0) return;

    moveDisks(size - 1, source, buffer, target);
    sliceDisk(source, target);
    moveDisks(size - 1, buffer, target, source);
}

function moveDisksNotOptimized(source, target, transitional) {
    if (source.isEmpty()) return;

    if (canSliceDisk(source, transitional)) {
        sliceDisk(source, transitional);
        moveDisks(target, source, transitional);
        sliceDisk(transitional, target);
        moveDisks(source, target, transitional);
    }
}

function canSliceDisk(source, target) {
    return !source.isEmpty() &&
        (target.isEmpty() || target.peek() > source.peek());
}

function sliceDisk(source, target) {
    if (canSliceDisk(source, target)) {
        target.push(source.pop());
    } else {
        throw new Error(`can't push 
                the disk ${source.peek()} above 
                the ${tower.peek()}`);
    }
}

module.exports = moveDisks;