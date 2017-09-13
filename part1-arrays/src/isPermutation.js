function isPermutation(a, b) {
    if(a.length !== b.length) {
        return false;
    } else {
        let aChars = stringToTable(a);
        return isConsistOf(b, aChars);
    }
}

function stringToTable(string) {
    let charsTable = {};
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        charsTable[char] = charsTable[char] || 0;
        charsTable[char] ++;
    }
    return charsTable;
}

function isConsistOf(string, table) {
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if(table[char] && table[char] > 0) {
            table[char] --;
        } else {
            return false;
        }
    }
    return true;
}

module.exports = isPermutation;