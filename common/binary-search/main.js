import log from './logger.js';
import binarySearch from './algorithm.js';

const range = R.range(0, 100);
const devidable5 = value => value % 5 === 0;
const data = R.filter(devidable5, range);
const item = data[Math.floor(Math.random() * data.length)];

renderInfo();

function renderInfo() {    
    log('Binary Search');
    log('-----');
    log('data: ');
    log(data);
    log('-----');
    log('item to find: ' + item);
    log('-----');
    log('working ...');
    log('result index: ' + binarySearch(item, data));
    log('end');
}