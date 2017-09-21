const assert = require('assert');
const should = require('should');
const minTree = require('../src/minTree');

describe('minTree', function() {
  it('should have depth 1 for 1 element', function() {
    let data = [0];
    minTree(data).depth().should.be.exactly(1);
  });
  it('should have depth 2 for 2 elements', function() {
    let data = [0, 1];
    minTree(data).depth().should.be.exactly(2);
  });
  it('should have depth 2 for 3 elements', function() {
    let data = [0, 1, 2];
    minTree(data).depth().should.be.exactly(2);
  });
  it('should have depth 3 for 4 elements', function() {
    let data = [0, 1, 2, 3];
    minTree(data).depth().should.be.exactly(3);
  });
  it('should have depth 3 for 7 elements', function() {
    let data = [0, 1, 2, 3, 4, 5, 6];
    minTree(data).depth().should.be.exactly(3);
  });
});