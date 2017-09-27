const assert = require('assert');
const should = require('should');
const BinaryTree = require('../common/binaryTree');
const isBST = require('../src/isBST');

describe('isBST', function () {
  let tree = null,
    leftTree = null,
    rightTree = null;
  beforeEach(function () {
    leftTree = new BinaryTree();
    leftTree.add(5);
    rightTree = new BinaryTree();
    rightTree.add(15);
    tree = new BinaryTree();
    tree.add(10);
    tree.root.left = leftTree.root;
    tree.root.right = rightTree.root;
  })
  it('should be "TRUE" if binary search tree', function () {
    /* Tree
                10
          5           15
       2    7      12    20
    */
    leftTree.add(2);
    leftTree.add(7);
    rightTree.add(12);
    rightTree.add(20);
    isBST(tree).should.be.exactly(true);
  });
  it('should be "FALSE" if left part of tree is unbalanced', function () {
    /* Tree
                10
          5           15
       2    11     12    20
    */
    leftTree.add(2);
    leftTree.add(11);
    rightTree.add(12);
    rightTree.add(20);
    isBST(tree).should.be.exactly(false);
  });
  it('should be "FALSE" if right part of tree is unbalanced', function () {
    /* Tree
                10
          5           15
       2    7       8    20
    */
    leftTree.add(2);
    leftTree.add(7);
    rightTree.add(8);
    rightTree.add(20);
    isBST(tree).should.be.exactly(false);
  });
});