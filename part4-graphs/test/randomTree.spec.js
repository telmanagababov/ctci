const assert = require('assert');
const should = require('should');
const RandomTree = require('../src/randomTree');

describe('randomTree', function () {
  let tree = null,
      node = null,
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
  it('should return correct random if index 0 (0 => 10)', function () {
    setRandom(tree, 0);
    node = tree.find(10);
    tree.getRandomNode().should.be.exactly(node);
  });
  it('should return correct random if index 1 (1 => 5)', function () {
    setRandom(tree, 1);
    node = tree.find(5);
    tree.getRandomNode().should.be.exactly(node);
  });
  it('should return correct random if index 3 (3 => 1)', function () {
    setRandom(tree, 3);
    node = tree.find(1);
    tree.getRandomNode().should.be.exactly(node);
  });
  it('should return correct random if index 7 (7 => 7)', function () {
    setRandom(tree, 7);
    node = tree.find(7);
    tree.getRandomNode().should.be.exactly(node);
  });
  it('should return correct random after insert', function () {
    tree.insert(-1);
    setRandom(tree, 5);
    node = tree.find(-1);
    tree.getRandomNode().should.be.exactly(node);
  });
  it('should return correct random after delete', function () {
    tree.delete(2);
    setRandom(tree, 2);
    node = tree.find(0);
    tree.getRandomNode().should.be.exactly(node);
  });

  function setRandom(tree, value) {
    Math.random = function () { return value * 1 / tree.size; };
  }
  function createTree(values) {
    let tree = new RandomTree();
    values.forEach(item => tree.insert(item));
    return tree;
  }
});