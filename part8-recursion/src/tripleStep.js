// 3^n
function getTotalPossibleWays3n(stepsNumber) {
    if (stepsNumber === 0) return 1;
    if (stepsNumber < 0) return 0;

    return getTotalPossibleWays(stepsNumber - 1) +
        getTotalPossibleWays(stepsNumber - 2) +
        getTotalPossibleWays(stepsNumber - 3);
}

// n
function getTotalPossibleWays(stepsNumber) {
    if (stepsNumber === 0) return 1;
    if (stepsNumber < 0) return 0;

    if (!getTotalPossibleWays.ways[stepsNumber]) {
        getTotalPossibleWays.ways[stepsNumber] =
            getTotalPossibleWays(stepsNumber - 1) +
            getTotalPossibleWays(stepsNumber - 2) +
            getTotalPossibleWays(stepsNumber - 3);
    }

    return getTotalPossibleWays.ways[stepsNumber];
}
getTotalPossibleWays.ways = {};

module.exports = getTotalPossibleWays;