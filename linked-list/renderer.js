function renderList(list) {
    const graphviz = d3.select("#graph").graphviz();
    const transition = d3.transition();
    const dots = toDots(list);

    graphviz
        .dot(dots)
        .transition(transition)
        .render();
}

function toDots(list) {
    const dotsStructureStart = ['digraph  {','    node [style="filled"]'];
    const dotsStructureEnd = ['}'];
    let dots = []
    
    while(list) {
        dots.push(`    ${list.value} [fillcolor="${getColor()}"]`);
        if(list.next) {
            dots.push(`    ${list.value} -> ${list.next.value}`);
        }
        list = list.next;
    }

    return dotsStructureStart
        .concat(dots)
        .concat(dotsStructureEnd)
        .join('');
}

function getColor() {
    let color = "#";
    for(let i = 0; i < 3; i++) {
        color += Math.round(Math.random() * 256).toString(16);
    }
    return color;
}