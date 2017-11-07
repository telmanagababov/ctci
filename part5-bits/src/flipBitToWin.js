function flipBitToWin(value) {
    let bitValue = value.toString(2),
        leftSequence = 0,
        middleSequence = 0,
        rightSequence = 0,
        maxSequence = 0;

    for (let i = 0; i < bitValue.length; i++) {
        if (bitValue.charAt(i) === '1') {
            if (!middleSequence) {
                leftSequence++;
            } else {
                rightSequence++;
            }
        } else {
            if (!middleSequence) {
                middleSequence = 1;
            } else {
                leftSequence = rightSequence;
                rightSequence = 0;
            }
        }

        if (leftSequence + middleSequence + rightSequence > maxSequence) {
            maxSequence = leftSequence + middleSequence + rightSequence;
        }
    }

    return maxSequence;
}

module.exports = flipBitToWin;