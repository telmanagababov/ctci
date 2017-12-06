function findMagicIndexInDistinctArray(data) {
    let halfIndex = Math.floor(data.length / 2);

    if (data[halfIndex] === halfIndex) return halfIndex;
    else if (data.length <= 1) return null;

    if (data[halfIndex] > halfIndex) {
        data = data.slice(0, halfIndex);
    } else {
        data = data.slice(halfIndex);
    }
    return findMagicIndexInDistinctArray(data);
}

function findMagicIndex(data) {
    for (let i = 0, iEnd = data.length - 1; i <= iEnd;) {
        if (data[i] === i) return i;
        if (data[iEnd] === iEnd) return iEnd;

        if (data[i] > i) {
            i = data[i];
        } else {
            i++;
        }

        if (data[iEnd] < iEnd) {
            iEnd = i;
        } else {
            iEnd--;
        }
    }
    return null;
}

module.exports = {
    findMagicIndexInDistinctArray,
    findMagicIndex
};