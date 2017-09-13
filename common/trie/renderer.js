function renderTrie(trie) {
    const graphviz = d3.select("#graph").graphviz();
    const transition = d3.transition();
    const dots = toDots(trie);

    graphviz
        .dot(dots)
        .transition(transition)
        .render();
}

function toDots(trie) {
    const dotsStructureStart = ['digraph  {','    node [style="filled"]'];
    const dotsStructureEnd = ['}'];
    let dots = getTrieDots(trie);
    return dotsStructureStart
        .concat(dots)
        .concat(dotsStructureEnd)
        .join('');
}

function getTrieDots(trie, prefix) {
    return [`    ${trie.key} [fillcolor="${getColor()}"]`]
        .concat(getDots(trie, trie.key, true));
}

function getDots(trie, prefix, isRoot) {
    return trie.children.reduce(function(dots, child) {
        let childPrefix = isRoot ? child.key : prefix + child.key;
        dots.push(`    ${childPrefix} [fillcolor="${getColor()}"]`);
        dots.push(`    ${prefix} -> ${childPrefix}`);
        return dots.concat(getDots(child, childPrefix, false));
    }, []);
}

function getColor() {
    let color = "#";
    for(let i = 0; i < 3; i++) {
        color += Math.round(Math.random() * 256).toString(16);
    }
    return color;
}