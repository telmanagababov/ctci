function groupAnagrams(data) {
    let groups = [];

    data.forEach(item => {
        let groupIndex = getGroupIndex(groups, item);
        if (groupIndex >= 0) {
            groups[groupIndex].push(item);
        } else {
            groups.push([item]);
        }
    });

    return groups.reduce((acc, item) => {
        return acc.concat(item);
    }, []);
}

function getGroupIndex(groups, item) {
    for (let i = 0; i < groups.length; i++) {
        if (isAnagrams(item, groups[i][0])) {
            return i;
        }
    }
    return -1;
}

function isAnagrams(a, b) {
    if (a.length !== b.length) return false;

    let aCharsMap = new Map();

    for (let aChar of a) {
        if (aCharsMap.has(aChar)) {
            let current = aCharsMap.get(aChar);
            aCharsMap.set(aChar, current + 1);
        } else {
            aCharsMap.set(aChar, 1);
        }
    }

    for (let bChar of b) {
        if (aCharsMap.has(bChar)) {
            let current = aCharsMap.get(bChar);
            if (current > 1) {
                aCharsMap.set(bChar, current - 1);
            } else {
                aCharsMap.delete(bChar);
            }
        } else {
            return false;
        }
    }

    return true;
}

module.exports = groupAnagrams;