function swapPairwise(value) {
    let bits = value.toString(2),
        isEven = bits.length % 2 === 0,
        swappedBits = isEven ? '' : bits[0];

    for(let i = isEven ? 0 : 1; i < bits.length; i += 2) {
        swappedBits += bits.charAt(i + 1) + bits.charAt(i);
    }

    return parseInt(swappedBits, 2);
}

module.exports = swapPairwise;