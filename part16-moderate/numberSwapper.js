function swapNumbers(source, aIndex, bIndex) {
    source[aIndex] = source[bIndex] + source[aIndex];
    source[bIndex] = source[aIndex] - source[bIndex];
    source[aIndex] = source[aIndex] - source[bIndex];

    return source;
}



let source = [1, 2, 3, 4, 5],
    aIndex = 2,
    bIndex = 4;
console.log('swapNumbers',
    ':', source,
    ':', aIndex, bIndex,
    '::', swapNumbers(source.concat(), aIndex, bIndex));