function getNumberOfWays(expression, result) {
    let ways = 0;

    for (let i = 0; i < expression.length; i += 2) {
        let baseExpression = insert(expression, i, '(');

        for (let j = i + 4; j <= baseExpression.length; j += 2) {
            let totalExpression = insert(baseExpression, j, ')');
            if (isEvalToResult(totalExpression, result)) {
                ways++;
                console.log('passed: ', totalExpression);
            }
        }
    }

    return ways;
}

function insert(string, index, value) {
    return string.substring(0, index) + value + string.substring(index);
}

function isEvalToResult(expression, result) {
    return Boolean(eval(expression)) === result;
}

module.exports = getNumberOfWays;