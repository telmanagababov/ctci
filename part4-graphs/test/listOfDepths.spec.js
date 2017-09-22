const assert = require('assert');
const should = require('should');
const minTree = require('../src/minTree');
const listOfDepths = require('../src/listOfDepths');

describe('listOfDepths', function() {
  it('should generate 1 layer for 1 item', function() {
    let tree = minTree([0]),
      depths = listOfDepths(tree);
    depths[0].should.be.deepEqual([0]);
  });
  it('should generate 2 layers for 3 items', function() {
    let tree = minTree([0, 1, 2]),
      depths = listOfDepths(tree);
    depths[1].should.be.deepEqual([0, 2]);
  });
  it('should generate 3 layers for 7 items', function() {
    let tree = minTree([0, 1, 2, 3, 4, 5, 6]),
      depths = listOfDepths(tree);
    depths[2].should.be.deepEqual([0, 2, 4, 6]);
  });
  it('should generate 4 layers for 15 items', function() {
    let tree = minTree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
      depths = listOfDepths(tree);
    depths[3].should.be.deepEqual([0, 2, 4, 6, 8, 10, 12, 14]);
  });
});