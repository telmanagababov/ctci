function createTrie(data) {
    let trie = new Node('root');
    data.forEach(item => {
        fillTrie(trie, item);
    });
    return trie;
}

function fillTrie(trie, data) {
    for(let i = 0; i < data.length; i++) {
        let char = data.charAt(i),
            node = trie.children.filter(child => child.key === char)[0];
        if(!node) {
            node = new Node(char);
            trie.children.push(node);
        }
        trie = node;
    }
}