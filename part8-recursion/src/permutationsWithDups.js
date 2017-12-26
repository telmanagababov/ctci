function computePermutations(string /*, base = "" */) {
    if (/*base.length &&*/ !string.length) return 1;

    let combinations = 0,
        uniqueChars = Array.from(new Set(string.split(""))).join("");

    for (let i = 0; i < uniqueChars.length; i++) {
        let char = uniqueChars.charAt(i),
            index = string.indexOf(char),
            newString = string.slice(0, index) + string.slice(index + 1) /*,
            newBase = base + char*/;
        combinations += computePermutations(newString /*, newBase*/);
    }

    return combinations;
}

module.exports = computePermutations;