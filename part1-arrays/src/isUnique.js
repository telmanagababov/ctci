function isUnique(string) {
    let uniqueChars = new Set();
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (uniqueChars.has(char)) {
            return false;
        } else {
            uniqueChars.add(char);
        }
    }
    return true;
}

module.exports = isUnique;