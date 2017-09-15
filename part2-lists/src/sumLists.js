const list = require('../common/list');

function sumLists(a, b, isReversed) {
    let aValue = toNumber(a, isReversed),
        bValue = toNumber(b, isReversed),
        resultValue = aValue + bValue;
    return toList(resultValue, isReversed);
}

function toNumber(head, isReversed) {
    let value = '',
        node = head;
    while(node) {
        value += node.value;
        node = node.next;
    }
    return isReversed ? parseInt(reverse(value)) : parseInt(value);
}

function toList(value, isReversed) {
    let dataValue = isReversed ? reverse(value.toString()) : value.toString(),
        data = dataValue.split("").map(mapInt);
    return list.create(data);
}

function reverse(string) {
    return string.split("").reverse().join("");
}

function mapInt(value) {
    return parseInt(value);
}

module.exports = sumLists;