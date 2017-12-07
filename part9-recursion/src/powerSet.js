function getAllSubsets(set) {
    let subsets = [[]];
    set.forEach(item => {
        let itemSubsets = getItemSubsets(subsets, item);
        subsets = subsets.concat(itemSubsets);

    })
    return subsets;
}

function getItemSubsets(subsets, item) {
    let itemSubsets = [];
    subsets.forEach(currentItem => {
        let currentSubset = currentItem.concat(item);
        itemSubsets.push(currentSubset);
    });
    return itemSubsets;
}



function getAllSubsetsTrie(set) {
    let subsetsTrie = generateTrie(set);
    return toSubsets(subsetsTrie);
}

function generateTrie(set, value = []) {
    let trie = new Node(value);
    set.forEach((item, i) => {
        let childItems = set.slice(i + 1),
            child = generateTrie(childItems, item);
        trie.children.push(child);
    });
    return trie;
}

function toSubsets(trie, base = []) {
    let subsets = [],
        currentSubset = base.concat(trie.value);
    subsets.push(currentSubset);
    trie.children.forEach(node => {
        let nodeSubsets = toSubsets(node, currentSubset);
        subsets = subsets.concat(nodeSubsets);
    });
    return subsets;
}

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}



function getAllSubsetsMask(set) {
    let subsets = [],
        subsetMask = '0'.repeat(set.length),
        lastSubsetMask = '1'.repeat(set.length);

    while (subsetMask.length <= lastSubsetMask.length) {
        let currentSubset = getSubset(reverse(subsetMask), set);
        subsets.push(currentSubset);
        subsetMask = getNextMask(subsetMask);
    }

    console.log('subsets: ', subsets);
    return subsets;
}

function reverse(mask) {
    return mask.split('').reverse().join('');
}

function getSubset(mask, set) {
    let subset = [];
    for (let i = 0; i < mask.length; i++) {
        if (mask.charAt(i) === '1') {
            subset.push(set[i]);
        }
    }
    return subset;
}

function getNextMask(mask) {
    let nextValue = parseInt(mask, 2) + 1;
    return nextValue.toString(2);
}


module.exports = getAllSubsets;