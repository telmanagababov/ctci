function printAllParents(parents, backParents = parents, base = '') {
    if (!parents && !backParents) log(base);

    if (parents > 0) {
        printAllParents(parents - 1, backParents, base + '(');
    }
    if (backParents > parents) {
        printAllParents(parents, backParents - 1, base + ')');
    }
}

function log(data) {
    console.log(data);
}

module.exports = printAllParents;