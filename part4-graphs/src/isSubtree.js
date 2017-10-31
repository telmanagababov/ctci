function isSubtree(tree, subTree) {
    if (tree) {
        return isEqual(tree, subTree)
            || isSubtree(tree.left, subTree)
            || isSubtree(tree.right, subTree);
    } else {
        return false;
    }
}

function isEqual(a, b) {
    let aRoots = [a],
        bRoots = [b];
    while (aRoots.length && bRoots.length) {
        let aCurrentRoot = aRoots.pop(),
            bCurrentRoot = bRoots.pop();
        if (aCurrentRoot.value === bCurrentRoot.value) {
            if (aCurrentRoot.left) aRoots.push(aCurrentRoot.left);
            if (aCurrentRoot.right) aRoots.push(aCurrentRoot.right);
            if (bCurrentRoot.left) bRoots.push(bCurrentRoot.left);
            if (bCurrentRoot.right) bRoots.push(bCurrentRoot.right);
        } else {
            return false;
        }
    }
    return aRoots.length === 0 && bRoots.length === 0;
}

module.exports = isSubtree;