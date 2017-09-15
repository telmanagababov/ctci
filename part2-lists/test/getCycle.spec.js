const assert = require('assert');
const should = require('should');
const Node = require('../common/node')
const list = require('../common/list');
const getCycle = require('../src/getCycle');

describe('getCycle', function() {
  it('should return cycle head for cycled list', function() {
    let input = list.create([1, 2]),
        cycleNode = new Node(3);
    list.addNode(input, cycleNode);
    list.addNode(input, new Node(4));
    list.addNode(input, new Node(5));
    list.addNode(input, cycleNode);
    getCycle(input).should.be.exactly(cycleNode);
  });
  it('should return null if has no cycles', function() {
    let input = list.create([1, 2, 3, 4, 5]);
    should(getCycle(input)).be.exactly(null);
  });
});