const assert = require('assert');
const should = require('should');
const BinaryTree = require('../common/binaryTree');
const isBalanced = require('../src/isBalanced');

describe('isBalanced', function() {
  let tree = null;
  beforeEach(function() {
    tree = new BinaryTree();
  })
  it('should be "TRUE" if balanced tree', function() {
    /* Tree
          10
        5   15
       2 7
    */
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(2);
    tree.add(7);
    isBalanced(tree).should.be.exactly(true);
  });
  it('should be "FALSE" if imbalanced tree', function() {
    /* Tree
                10
             5       15
          2    7
       1
    */
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(2);
    tree.add(7);
    tree.add(1);
    isBalanced(tree).should.be.exactly(false);
  });
});