const assert = require('assert');
const should = require('should');
const BinaryTree = require('../common/binaryTree');
const isBalanced = require('../src/isBalanced');

describe('isBalanced', function() {
  let tree = null;
  beforeEach(function() {
    tree = new BinaryTree();
  })
  it('should bet "TRUE" for balanced tree', function() {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(2);
    tree.add(7);
    isBalanced(tree).should.be.exactly(true);
  });
  it('should be "FALSE" for imbalanced tree', function() {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(2);
    tree.add(7);
    tree.add(1);
    isBalanced(tree).should.be.exactly(false);
  });
});