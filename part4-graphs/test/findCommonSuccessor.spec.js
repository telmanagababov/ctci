const assert = require('assert');
const should = require('should');
const BinaryTree = require('../common/binaryTree');
const findCommonSuccessor = require('../src/findCommonSuccessor');

describe('findCommonSuccessor', function () {
  let tree = null;
  beforeEach(function () {
    /* Tree
                              10
                  5                      15
          2            7            11        19
      1      3            8
    */
    tree = new BinaryTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(2);
    tree.add(7);
    tree.add(11);
    tree.add(19);
    tree.add(1);
    tree.add(3);
    tree.add(8);
  });
  it('should return successor for nodes with same parent node', function () {
    let nodeA = tree.root.left.left.left, /* 1 */
      nodeB = tree.root.left.left.right, /* 3 */
      successorNode = tree.root.left.left; /* 2 */
    assert(nodeA, nodeB, successorNode);
  });
  it('should return successor for nodes with different parents', function () {
    let nodeA = tree.root.left.left.left, /* 1 */
      nodeB = tree.root.left.right.right, /* 8 */
      successorNode = tree.root.left; /* 5 */
    assert(nodeA, nodeB, successorNode);
  });
  it('should return nodeA if nodeA is successor of nodeB', function () {
    let nodeA = tree.root.left.left, /* 2 */
      nodeB = tree.root.left.left.right, /* 3 */
      successorNode = nodeA; /* 2 */
    assert(nodeA, nodeB, successorNode);
  });
  it('should return root for nodes without common successor', function () {
    let nodeA = tree.root.left.left, /* 2 */
      nodeB = tree.root.right.right, /* 19 */
      successorNode = tree.root; /* 10 */
    assert(nodeA, nodeB, successorNode);
  });
  
  function assert(a, b, result) {
    findCommonSuccessor(tree.root, a, b).should.be.exactly(result);
  }
});