const assert = require('assert');
const should = require('should');
const BinaryTree = require('../common/binaryTree');
const countPathsWithSum = require('../src/countPathsWithSum');

describe('countPathsWithSum', function () {
  let tree = null,
      data = [10, 5, 15, 2, 7, 11, 19, 1, 3, 8, 21, 9, 13, 0, 4];
  beforeEach(function () {
    /* Tree
                              10
                  5                         15
          2            7             11            19
      1      3            8             13              21
    0          4             9           
    */
    tree = createTree(data);
  });
  it('should find 0 paths for 100', function () {
    countPathsWithSum(tree, 100).should.be.exactly(0);
  });
  it('should find 1 path for 0', function () {
    countPathsWithSum(tree, 0).should.be.exactly(1);
  });
  it('should find 3 paths for 8', function () {
    countPathsWithSum(tree, 8).should.be.exactly(3);
  });
  it('should find 3 paths for 15', function () {
    countPathsWithSum(tree, 15).should.be.exactly(3);
  });

  function createTree(values) {
    let tree = new BinaryTree();
    values.forEach(item => tree.add(item));
    return tree.root;
  }
});