const BinaryTree = require("../common/binaryTree");

function minTree(data) {
    let tree = new BinaryTree();
    return addFromRange(tree, data, 0, data.length - 1);
}

function addFromRange(tree, data, start, end) {
    let itemIndex = Math.floor((start + end) / 2);
    tree.add(data[itemIndex]);
    if (itemIndex > start) {
        addFromRange(tree, data, start, itemIndex - 1);
    }
    if (itemIndex < end) {
        addFromRange(tree, data, itemIndex + 1, end);
    }
    return tree;
}

module.exports = minTree;