function findDuplicates(array) {
    let duplicateIndicators = createDuplicateIndicators();

    array.forEach(item => {
        if (hasIndicator(duplicateIndicators, item)) {
            console.log(item);
        } else {
            setIndicator(duplicateIndicators, item);
        }
    });
}

function createDuplicateIndicators() {
    return Array.from(new Array(4096)).map(item => 0);
}

function hasIndicator(duplicateIndicators, item) {
    let wordIndex = Math.floor(item / 8),
        bitIndex = item % 8;
    let word = duplicateIndicators[wordIndex],
        bitMask = 1 << bitIndex;

    return (word & bitMask) > 0;
}

function setIndicator(duplicateIndicators, item) {
    let wordIndex = Math.floor(item / 8),
        bitIndex = item % 8;
    let word = duplicateIndicators[wordIndex],
        bitMask = 1 << bitIndex;

    duplicateIndicators[wordIndex] = word | bitMask;
}

module.exports = findDuplicates;