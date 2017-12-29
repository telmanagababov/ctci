class Stream {
    constructor() {
        this.data = [];
        this.sortedData = [];
    }

    track(value) {
        this.data.push(value);
        addToSortedArray(this.sortedData, value);
    }

    getRankOfNumber(value) {
        let rank = getItemMaxIndex(this.sortedData, value);
        return Math.max(rank, 0);
    }
}

function addToSortedArray(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > value) {
            array.splice(i, 0, value);
            return;
        }
    }
    array.push(value);
}

function getItemMaxIndex(array, value) {
    let leftIndex = 0,
        rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = rightIndex > 0 ? Math.floor((leftIndex + rightIndex) / 2) : 0,
            middleItem = array[middleIndex];

        if (middleItem === value) {
            while (array[middleIndex + 1] === value) {
                middleIndex++;
            }
            return middleIndex;
        } else if (middleItem > value) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

module.exports = Stream;