function isOneAway(a, b) {
    if (Math.abs(a.length - b.length) > 1) {
        return false;
    } else {
        const errors = getErrorsNumber(a, b);
        return errors <= 1;
    }
}

function getErrorsNumber(a, b) {
    let aIndex = 0,
        bIndex = 0,
        insertErrors = 0,
        replaceErrors = 0;
    for (; aIndex < a.length && bIndex < b.length; aIndex++ , bIndex++) {
        if (a.charAt(aIndex) != b.charAt(bIndex)) {
            if(a.length < b.length) {
                aIndex--;
            } else if(b.length < a.length) {
                bIndex--;
            } else {
                replaceErrors++;
            }
        }
    }
    insertErrors = (a.length + b.length - aIndex - bIndex);
    return replaceErrors + insertErrors;
}

module.exports = isOneAway;