function search(array, element) {
    let firstElement = array[0],
        lastElement = array[array.length - 1];

    let leftIndex = 0,
        rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2),
            middleValue = array[middleIndex];

        if (middleValue === element) {
            return middleIndex;
        } else if (
            (middleValue > element && firstElement <= element) ||
            (middleValue > element && firstElement > middleValue) ||
            (middleValue < element && firstElement > middleValue && firstElement <= element)
        ) {
            rightIndex = middleIndex - 1;
            lastElement = array[rightIndex];
        } else {
            leftIndex = middleIndex + 1;
            firstElement = array[leftIndex];
        }
    }

    return -1;
}

module.exports = search;