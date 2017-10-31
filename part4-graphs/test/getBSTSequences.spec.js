const assert = require('assert');
const should = require('should');
const BinaryTree = require('../common/binaryTree');
const getBSTSequences = require('../src/getBSTSequences');

describe('getBSTSequences', function () {
  it('should get sequences for 1 level tree', function () {
    /* Tree
                              10
    */
    const expectedSequences = [[10]];
    let tree = new BinaryTree();
    tree.add(10);
    assert(expectedSequences, getBSTSequences(tree));
  });
  it('should get sequences for 2 level tree', function () {
    /* Tree
                              10
                  5                      15
    */
    const expectedSequences = [[10, 5, 15], [10, 15, 5]];
    tree = new BinaryTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    assert(expectedSequences, getBSTSequences(tree));
  });
  it('should get sequences for 3 level tree', function () {
    /* Tree
                              10
                  5                      15
          2                         11
    */
    const expectedSequences = [
      [10, 5, 2, 15, 11],
      [10, 5, 15, 2, 11],
      [10, 5, 15, 11, 2],
      [10, 15, 11, 5, 2],
      [10, 15, 5, 2, 11],
      [10, 15, 5, 11, 2],
    ];
    tree = new BinaryTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(2);
    tree.add(11);
    assert(expectedSequences, getBSTSequences(tree));
  });
  
  function assert(expected, actual) {
    expected.forEach(curSequence => {
      actual.should.containEql(curSequence);
    });
  }
});