const Node = require("../common/treeNode");

function findSuccessor(tree, node) {
    let successor = tree.root;

    while(successor.left !== node && successor.right !== node) {
        if(successor.value > node.value) {
            successor = successor.left;
        } else {
            successor = successor.right;
        }
    }

    return successor;
}

module.exports = findSuccessor;