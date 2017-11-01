const Node = require("../common/binaryNode");

class RandomTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    getRandomNode() {
        let index = Math.round(Math.random() * (this.size - 1));
        return this.getNodeByIndex(index);
    }

    insert(value) {
        let valueNode = new Node(value);
        if (!this.root) {
            this.root = valueNode;
        } else {
            this.addNode(this.root, valueNode);
        }
        this.size++;
    }

    delete(value) {
        let parentNode = null,
            node = this.root;
        while (node) {
            if (node.value === value) {
                this.removeNode(parentNode, node);
                this.size--;
                break;
            } else if (node.value > value) {
                parentNode = node;
                node = node.left;
            } else {
                parentNode = node;
                node = node.right;
            }
        }
    }

    find(value) {
        let node = this.root;
        while (node) {
            if (node.value === value) {
                return node;
            } else if (node.value > value) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return node;
    }

    addNode(root, node) {
        while (true) {
            if (node.value < root.value) {
                if (root.left) {
                    root = root.left;
                } else {
                    root.left = node;
                    break;
                }
            } else {
                if (root.right) {
                    root = root.right;
                } else {
                    root.right = node;
                    break;
                }
            }
        }
    }

    removeNode(parentNode, node) {
        let leafNode = node;
        while (leafNode.left || leafNode.right) {
            if (leafNode.left) {
                leafNode = leafNode.left;
            } else {
                leafNode = leafNode.right;
            }
        }
        if (!parentNode) {
            this.root = leafNode;
        } else if (node === parentNode.left) {
            parentNode.left = leafNode;
        } else {
            parentNode.right = leafNode;
        }
        leafNode.left = node.left;
        leafNode.right = node.right;
    }

    getNodeByIndex(index) {
        return getNode(this.root);

        function getNode(tree) {
            if(index === 0) {
                return tree;
            } else {
                let leftNode = null,
                    rightNode = null;
                if(tree.left) {
                    index--;
                    leftNode = getNode(tree.left);
                }
                if(tree.right && index > 0) {
                    index--;
                    leftNode = getNode(tree.right);
                }
                return leftNode || rightNode;
            }
        }
    }
}

module.exports = RandomTree;