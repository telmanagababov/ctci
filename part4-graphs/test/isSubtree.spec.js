const assert = require('assert');
const should = require('should');
const BinaryTree = require('../common/binaryTree');
const isSubtree = require('../src/isSubtree');

describe('isSubtree', function () {
  let tree = null,
    subTree = null;
  beforeEach(function () {
    /* Tree
                              10
                  5                         15
          2            7             11            19
      1      3            8             13              21
    0          4             9           
    */
    tree = createTree([10, 5, 15, 2, 7, 11, 19, 1, 3, 8, 21, 9, 13, 0, 4]);
  });
  it('should be TRUE for same tree', function () {
    /* Tree
                              10
                  5                         15
          2            7             11            19
      1      3            8             13              21
    0          4             9           
    */
    subTree = createTree([10, 5, 15, 2, 7, 11, 19, 1, 3, 8, 21, 9, 13, 0, 4]);
    isSubtree(tree, subTree).should.be.exactly(true);
  });
  it('should be TRUE for left part of tree', function () {
    /* Tree
                  5
          2            7
      1      3            8
    0          4             9
    */
    subTree = createTree([5, 2, 7, 1, 3, 8, 9, 0, 4]);
    isSubtree(tree, subTree).should.be.exactly(true);
  });
  it('should be TRUE for right part of tree', function () {
    /* Tree
                                            15
                                     11            19
                                         13            21
    */
    subTree = createTree([15, 11, 19, 21, 13]);
    isSubtree(tree, subTree).should.be.exactly(true);
  });
  it('should be TRUE for low level part of tree', function () {
    /* Tree
          2
      1      3
    0          4
    */
    subTree = createTree([2, 1, 3, 0, 4]);
    isSubtree(tree, subTree).should.be.exactly(true);
  });
  it('should be TRUE for a single item low level part of tree', function () {
    /* Tree
     4
    */
    subTree = createTree([4]);
    isSubtree(tree, subTree).should.be.exactly(true);
  });

  it('should be FALSE for same tree with one error', function () {
    /* Tree
                              10
                  5                         15
          2            7             12            19
      1      3            8             13              21
    0          4             9           
    */
    subTree = createTree([10, 5, 15, 2, 7, 12, 19, 1, 3, 8, 21, 9, 13, 0, 4]);
    isSubtree(tree, subTree).should.be.exactly(false);
  });
  it('should be FALSE for mid level part without ending', function () {
    /* Tree
          2
      1      3
    */
    subTree = createTree([2, 1, 3]);
    isSubtree(tree, subTree).should.be.exactly(false);
  });
  it('should be FALSE for low level part of tree with one error', function () {
    /* Tree
          2
      1      3
    0          5
    */
    subTree = createTree([2, 1, 3, 0, 5]);
    isSubtree(tree, subTree).should.be.exactly(false);
  });

  function createTree(values) {
    let tree = new BinaryTree();
    values.forEach(item => tree.add(item));
    return tree.root;
  }
});