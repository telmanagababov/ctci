function createList(data) {
    let rootNode = null,
        lastNode = null;
    data.forEach(item => {
        let node = new Node(item);
        if(!rootNode) {
            rootNode = node;
        } else {
            lastNode.next = node;
        }
        lastNode = node;
    });
    return rootNode;
}