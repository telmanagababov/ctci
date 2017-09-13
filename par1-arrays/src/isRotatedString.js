function isRotatedString(string, rotatedString) {
    return isSubstring(rotatedString + rotatedString, string);
}

function isSubstring(string, substring) {
    return string.includes(substring);
}

module.exports = isRotatedString;