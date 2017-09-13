import log from './logger.js';
import tree from './tree.js';
import traverse from './algorithm.js';

renderInfo();

function renderInfo() {    
    log('Breadth-First Search');
    log('-----');
    log('tree: ');
    log(JSON.stringify(tree, null, 2));
    log('-----');
    log('working ...');
    traverse(tree);
    log('end');
}