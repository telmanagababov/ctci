function flipsToConversion(valueA, valueB) {
    let bitsA = valueA.toString(2),
        bitsB = valueB.toString(2),
        bitsToFlip = 0;

    for(let i = 0; i < bitsA.length; i++) {
        if(bitsA.charAt(i) !== bitsB.charAt(i)) {
            bitsToFlip ++;
        }
    }

    return bitsToFlip;
}

module.exports = flipsToConversion;