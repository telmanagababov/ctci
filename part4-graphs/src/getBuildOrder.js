const Node = require("../common/treeNode");

function getBuildOrder(projects, dependencies) {
    let order = [],
        items = projects.concat();

    while (items.length) {
        let queue = getQueue(items, dependencies);
        order = order.concat(queue.reverse());
    }

    return order;
}

function getQueue(projects, dependencies) {
    let queue = new Set(),
        item = projects[0];

    while(item) {
        if(queue.has(item)) {
            throw new Error("build order can't be established");
        } else {
            projects.splice(projects.indexOf(item), 1);
            queue.add(item);
        }
        item = dependencies[item];
    }

    return Array.from(queue);
}

module.exports = getBuildOrder;