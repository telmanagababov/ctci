function getIndex(list, item) {
    let leftIndex = 0,
        rightIndex = item * 2;

    while (leftIndex <= rightIndex) {
        let middleIndex = rightIndex > 0 ? Math.floor((leftIndex + rightIndex) / 2) : 0,
            middleItem = list.elementAt(middleIndex);

        if (middleItem === item) {
            return middleIndex;
        } else if (middleItem === -1 || middleItem > item) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

module.exports = getIndex;