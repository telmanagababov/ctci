const list = require('../common/list');

/* Brute force algorithm with (A*B) complexity
function getIntersection(a, b) {
    let aNode = a;
    while(aNode) {
        let bNode = b;
        while(bNode) {
            if(aNode === bNode) {
                return aNode;
            }
            bNode = bNode.next;
        }
        aNode = aNode.next;
    }
    return null;
} */

/* list-to-array algorithm with (A + B) complexity */
function getIntersection(a, b) {
    let intersection = null,
        aValues = flatten(a).reverse(),
        bValues = flatten(b).reverse(),
        i = 0;
    while(aValues[i] == bValues[i]) {
        intersection = aValues[i];
        i++;
    }
    return intersection;
}

function flatten(list) {
    let array = [],
        node = list;
    while(node) {
        array.push(node);
        node = node.next;
    }
    return array;
}

module.exports = getIntersection;