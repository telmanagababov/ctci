function getIndex(array, item) {
    let leftIndex = 0,
        rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = getMiddleIndex(array, leftIndex, rightIndex),
            middleItem = array[middleIndex];

        if (middleItem === item) {
            return middleIndex;
        } else if (middleItem > item) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

function getMiddleIndex(array, leftIndex, rightIndex) {
    let middleIndex = rightIndex > 0
        ? Math.floor((leftIndex + rightIndex) / 2)
        : 0,
        resultIndex = middleIndex,
        offset = 0;

    while (array[resultIndex] === '') {
        offset = offset > 0 ? -offset : -offset + 1
        resultIndex = middleIndex + offset;
    }

    return resultIndex;
}

module.exports = getIndex;