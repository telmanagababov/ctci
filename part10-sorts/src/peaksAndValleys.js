function sort(array) {
    let sorted = array.sort((a, b) => a - b);

    for (let i = 1; i < array.length - 1; i += 2) {
        normalizePair(array, i);

        let prev = array[i],
            next = array[i + 1];

        array[i] = next;
        array[i + 1] = prev;
    }

    return array;
}

function normalizePair(array, i) {
    let j = i + 1;
    while (j + 1 < array.length && array[i] === array[i + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        j++;
    }
}

module.exports = sort;