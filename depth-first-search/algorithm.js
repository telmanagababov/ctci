import log from './logger.js';

const printNode = node => log(node.value);

function traverse(tree) {
    printNode(tree);
    tree.children.forEach(traverse);
}

export default traverse;