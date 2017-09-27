const Node = require("../common/treeNode");

function isBST(tree) {
    let isBinaryTree = true;

    function checkIsBinary(tree) {
        let empty = { min: tree.value, max: tree.value },
            left = tree.left ? checkIsBinary(tree.left) : empty,
            right = tree.right ? checkIsBinary(tree.right) : empty;
    
        if(left.max > tree.value || tree.value > right.min) {
            isBinaryTree = false;
        }
    
        return {
            min: Math.min(tree.value, left.min, right.min),
            max: Math.max(tree.value, left.max, right.max)
        }
    }
    checkIsBinary(tree.root);

    return isBinaryTree;
}

module.exports = isBST;