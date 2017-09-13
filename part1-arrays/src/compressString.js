function compressString(string) {
    let compressed = compress(string);
    return compressed.length < string.length ? compressed : string;
}

function compress(string) {
    let compressed = '',
        lastChar = '',
        lastCharOccurrence = '';
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (char !== lastChar) {
            compressed += lastChar + lastCharOccurrence;
            lastChar = char;
            lastCharOccurrence = 1;
        } else {
            lastCharOccurrence++;
        }
    }
    compressed += lastChar + lastCharOccurrence;
    return compressed;
}

module.exports = compressString;