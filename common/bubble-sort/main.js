import log from './logger.js';
import sort from './algorithm.js';

const randomSort = () => Math.random() >= 0.5;
const data = R.range(0, 6).sort(randomSort);

renderInfo();

function renderInfo() {    
    log('Sort');
    log('-----');
    log('data:' + data);
    log('-----');
    const sortedData = sort(data);
    log('-----');
    log('result: ' + sortedData);
}