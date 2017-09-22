const Node = require("../common/treeNode");

function isBalanced(tree) {
    let isBalanced = true;

    function validateDepth(node) {
        let leftDepth = node.left ? validateDepth(node.left) : 0,
            rightDepth = node.right ? validateDepth(node.right) : 0;
        if(Math.abs(leftDepth - rightDepth) > 1) {
            isBalanced = false;
        }
        return Math.max(leftDepth, rightDepth) + 1;
    }
    validateDepth(tree.root);

    return isBalanced;
}

module.exports = isBalanced;