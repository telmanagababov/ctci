const list = require('../common/list');

function isPalindrome(data) {
    let value = list.flatten(data).join(""),
        reversedValue = reverse(value);
    return value === reversedValue;
}

function reverse(value) {
    return value.toString().split("").reverse().join("");
}

module.exports = isPalindrome;