function isPalindromePermutation(string) {
    const sanitized = sanitize(string),
        oddChars = getOddChars(sanitized);
    return oddChars.size <= 1;
}

function getOddChars(string) {
    let oddChars = new Set();
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (oddChars.has(char)) {
            oddChars.delete(char);
        } else {
            oddChars.add(char);
        }
    }
    return oddChars;
}

function sanitize(string) {
    return string.replace(/ /g, '');
}

module.exports = isPalindromePermutation;