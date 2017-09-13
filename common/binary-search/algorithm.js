import log from './logger.js';

const middleIndex = data => Math.floor(data.length / 2);
const leftHalf = data => R.slice(0, middleIndex(data), data);
const rightHalf = data => R.slice(middleIndex(data), Infinity, data);

const binarySearch = R.curry((item, data) => {
    const searchItem = binarySearch(item),
        index = middleIndex(data),
        indexItem = data[index];
    
    log('...process: ' + item + ' [' + index + ':' + indexItem + ']');

    if(item === indexItem) {
        return index;
    } else if(item < indexItem) {
        return R.compose(searchItem, leftHalf)(data);
    } else {
        return R.compose(searchItem, rightHalf)(data) + index;
    }
}); 

export default binarySearch;