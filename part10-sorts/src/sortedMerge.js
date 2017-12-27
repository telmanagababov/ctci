function mergeSorted(a, b) {
    let resultIndex = a.length + b.length - 1,
        aIndex = a.length - 1,
        bIndex = b.length - 1;

    while (aIndex >= 0 || bIndex >= 0) {
        let item = 0;
        if ((aIndex >= 0 && a[aIndex] > b[bIndex]) || bIndex < 0) {
            item = a[aIndex];
            aIndex--;
        } else {
            item = b[bIndex];
            bIndex--;
        }
        a[resultIndex] = item;
        resultIndex--;
    }

    return a;
}

module.exports = mergeSorted;