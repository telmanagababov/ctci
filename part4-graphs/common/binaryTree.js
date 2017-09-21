const Node = require("../common/binaryNode");

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        let valueNode = new Node(value),
            valueRoot = this.root;

        if(!this.root) {
            this.root = valueNode;
            return;
        }

        while (valueRoot.left !== valueNode && 
                valueRoot.right !== valueNode) {
            if (value < valueRoot.value) {
                if (valueRoot.left) {
                    valueRoot = valueRoot.left;
                } else {
                    valueRoot.left = valueNode;
                }
            } else {
                if (valueRoot.right) {
                    valueRoot = valueRoot.right;
                } else {
                    valueRoot.right = valueNode;
                }
            }
        }
    }

    depth() {
        function findDepth(node) {
            return node 
                    ? 1 + Math.max(
                        findDepth(node.left), 
                        findDepth(node.right)) 
                    : 0
        }
        return findDepth(this.root);
    }
}

module.exports = BinaryTree;