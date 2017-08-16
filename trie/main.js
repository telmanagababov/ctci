window.onload = event => {
    const inputControl = document.querySelector("#input-control");
    inputControl.onclick = evnet => renderState();
    renderState();
};

function renderState() {
    const inputDataElement = document.querySelector("#input-data"),
        data = inputDataElement.value.split(","),
        trie = createTrie(data);
    renderTrie(trie);
}