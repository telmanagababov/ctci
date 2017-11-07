function nextLowest(value) {
    let oneBits = getOneBits(value.toString(2)),
        nextValue = value - 1;
    while (oneBits !== getOneBits(nextValue.toString(2))) {
        nextValue--;
    }
    return nextValue;
}

function nextLargest(value) {
    let oneBits = getOneBits(value.toString(2)),
        nextValue = value + 1;
    while (oneBits !== getOneBits(nextValue.toString(2))) {
        nextValue++;
    }
    return nextValue;
}

function getOneBits(value) {
    return value.split('').reduce((acc, bit) => {
        return acc + parseInt(bit)
    }, 0);
}

module.exports = {
    nextLowest: nextLowest,
    nextLargest: nextLargest
};