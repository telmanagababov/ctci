function computeTallestHeight(boxes, base = null) {
    let boxHeight = base ? base.height : 0,
        restBoxesHeight = boxes.reduce((max, box, i) => {
            if (canPut(base, box)) {
                let restBoxes = getRestBoxes(boxes, i),
                    value = computeTallestHeight(restBoxes, box);
                return Math.max(max, value);
            } else {
                return max;
            }
        }, 0);

    return boxHeight + restBoxesHeight;
}

function getRestBoxes(boxes, i) {
    return boxes.slice(0, i).concat(i + 1);
}

function canPut(base, box) {
    return !base ||
        base.width > box.width &&
        base.height > box.height &&
        base.depth > box.depth;
}

module.exports = computeTallestHeight;