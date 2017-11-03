function insert(data, target, startIndex, endIndex) {
    let targetData = clear(target, startIndex, endIndex),
        insertData = shift(data, endIndex);
    return merge(targetData, insertData);
}

function shift(data, bits) {
    return data << bits;
}

function clear(data, startIndex, endIndex) {
    let mask = 1 << (startIndex - endIndex + 1);
    mask = mask - 1;
    mask = mask << endIndex;
    mask = ~mask;
    return data & mask;
}

function merge(a, b) {
    return a | b;
}

module.exports = insert;