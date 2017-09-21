const Node = require("../common/treeNode");

function hasRoute(nodeA, nodeB) {
    return hasDirectConnection(nodeA, nodeB) || 
        hasDirectConnection(nodeB, nodeA);
}

function hasDirectConnection(startNode, targetNode) {
    if(startNode === targetNode) {
        return true;
    } else {
        return startNode.children.reduce((result, node) => {
            return result || hasDirectConnection(node, targetNode);
        }, false);
    }
}

module.exports = hasRoute;