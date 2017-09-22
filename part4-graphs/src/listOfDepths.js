const Node = require("../common/treeNode");

function listOfDepths(tree) {
    return fillDepth([], tree.root, 0);
}

function fillDepth(target, source, level) {
    target[level] = target[level] || [];
    target[level].push(source.value);

    if(source.left !== null) {
        fillDepth(target, source.left, level + 1);
    }
    if(source.right !== null) {
        fillDepth(target, source.right, level + 1);
    }

    return target;
}

module.exports = listOfDepths;