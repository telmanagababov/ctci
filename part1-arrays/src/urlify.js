function urlify(string) {
    return string.replace(/ /g, '%20');
}

module.exports = urlify;