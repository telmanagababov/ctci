function calculateWays(n, coins = [25, 10, 5, 1]) {
    if (n < 0) return 0;
    if (n === 0 || coins.length === 1) return 1;

    return coins.reduce((acc, value, i) => {
        return acc + calculateWays(n - value, coins.slice(i));
    }, 0);
}

module.exports = calculateWays;