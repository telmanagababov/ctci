import log from './logger.js';

const printNode = node => log(node.value);

function traverse(tree) {
    traverseChildren([tree]);
}

function traverseChildren(children) {
    let nodes = children.reduce((acc, node) => {
        printNode(node);
        return acc.concat(node.children);
    }, []);
    if(nodes.length) {
        traverseChildren(nodes);
    }
}

export default traverse;