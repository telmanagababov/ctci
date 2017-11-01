function countPathsWithSum(tree, sum) {
    let paths = countPathsFrom(tree, sum, 0),
        pathsLeft = tree.left ? countPathsWithSum(tree.left, sum) : 0,
        pathsRight = tree.right ? countPathsWithSum(tree.right, sum) : 0;
    return paths + pathsLeft + pathsRight;
}

function countPathsFrom(tree, sum, curSum) {
    curSum += tree.value;
    let paths = sum === curSum ? 1 : 0,
        pathsLeft = tree.left ? countPathsFrom(tree.left, sum, curSum) : 0,
        pathsRight = tree.right ? countPathsFrom(tree.right, sum, curSum) : 0;
    return paths + pathsLeft + pathsRight;
}

module.exports = countPathsWithSum;