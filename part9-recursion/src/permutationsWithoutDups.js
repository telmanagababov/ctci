function computePermutations(string) {
    if(string.length === 1) return 1;
    return string.length * computePermutations(string.substring(1));
}

module.exports = computePermutations;