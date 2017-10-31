const Node = require("../common/treeNode");

function findCommonSuccessor(rootNode, nodeA, nodeB) {
    if (!rootNode) return null;
    let childSuccessor = findCommonSuccessor(rootNode.left, nodeA, nodeB) ||
        findCommonSuccessor(rootNode.right, nodeA, nodeB);
    return childSuccessor || getSuccessor(rootNode, nodeA, nodeB);
}

function getSuccessor(rootNode, nodeA, nodeB) {
    return hasRoute(rootNode, nodeA) && hasRoute(rootNode, nodeB)
        ? rootNode
        : null;
}

function hasRoute(startNode, targetNode) {
    if(!startNode) return false;
    if (startNode === targetNode) {
        return true;
    } else {
        return hasRoute(startNode.left, targetNode) ||
            hasRoute(startNode.right, targetNode);
    }
}

module.exports = findCommonSuccessor;