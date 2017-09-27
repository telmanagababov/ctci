const assert = require('assert');
const should = require('should');
const BinaryTree = require('../common/binaryTree');
const findSuccessor = require('../src/findSuccessor');

describe('findSuccessor', function () {
  let tree = null;
  beforeEach(function () {
    /* Tree
                   10
              5            15
          2     7      11     19
    */
    tree = new BinaryTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(2);
    tree.add(7);
    tree.add(11);
    tree.add(19);
  })
  it('should return successor for 1st level left node', function () {
    let successorNode = tree.root, /* 10 */
      node = tree.root.left; /* 5 */
    findSuccessor(tree, node).should.be.exactly(successorNode);
  });
  it('should return successor for 1st level right node', function () {
    let successorNode = tree.root, /* 10 */
      node = tree.root.right; /* 15 */
    findSuccessor(tree, node).should.be.exactly(successorNode);
  });
  it('should return successor for 2st level left node', function () {
    let successorNode = tree.root.left, /* 5 */
      node = tree.root.left.left; /* 2 */
    findSuccessor(tree, node).should.be.exactly(successorNode);
  });
  it('should return successor for 2st level right node', function () {
    let successorNode = tree.root.right, /* 15 */
      node = tree.root.right.right; /* 19 */
    findSuccessor(tree, node).should.be.exactly(successorNode);
  });
});