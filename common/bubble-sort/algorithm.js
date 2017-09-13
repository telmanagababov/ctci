import log from './logger.js';

function sort(toSort) {
    let sorted = R.clone(toSort);
    sorted.forEach((iItem, i) => {
        sorted.forEach((jItem, j) => {
            if(iItem < jItem) {
                [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
                log('...process: ' + sorted);
            }
        });
    });
    return sorted;
}

export default sort;