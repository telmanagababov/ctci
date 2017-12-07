function multiply(a, b) {
    let result = 0,
        base = a.toString(2),
        factor = b.toString(2);

    for (let i = factor.length - 1; i >= 0; i--) {
        if (factor.charAt(i) === '1') {
            let shiftLevel = factor.length - 1 - i,
                iterationValue = parseInt(base, 2) << shiftLevel;
            result += iterationValue;
        }
    }

    return a < 0 && b < 0 ? -result : result;
}

module.exports = multiply;