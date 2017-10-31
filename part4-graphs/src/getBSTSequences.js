const Node = require("../common/treeNode");

function getBSTSequences(tree) {
    let sequences = [];
    fillSequences([tree.root], []);
    return sequences;

    function fillSequences(roots, sequence) {
        roots.forEach((curRoot, i) => {
            let curSequence = sequence.concat(),
                curRoots = roots.concat();

            curRoots.splice(i, 1);
            curSequence.push(curRoot.value);

            if (curRoot.left) curRoots.push(curRoot.left);
            if (curRoot.right) curRoots.push(curRoot.right);

            fillSequences(curRoots, curSequence);
        });

        if (!roots.length && sequence.length) {
            sequences.push(sequence);
        }
    }
}


module.exports = getBSTSequences;