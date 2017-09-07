import log from './logger.js';

function sort(toSort) {
    return split(toSort, 0, toSort.length - 1);
}

function split(data, startI, endI) {
    if(startI === endI) {
        return [data[startI]];
    } else {
        let middleI = Math.floor((startI + endI) / 2);
        return merge(
            split(data, startI, middleI),
            split(data, middleI + 1, endI)
        );
    }
}

function merge(dataI, dataJ) {
    let merged = [];
    while(dataI.length || dataJ.length) {
        if (dataI[0] < dataJ[0] || !dataJ.length) {
            merged.push(dataI.shift());
        } else {
            merged.push(dataJ.shift());
        }
    }
    log('...process: ', merged);
    return merged;
}

export default sort;