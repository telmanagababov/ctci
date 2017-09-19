const assert = require('assert');
const should = require('should');
const ThreeStacks = require('../src/threeStacks');

describe('threeStacks', function() {
  let stacks = null;
  beforeEach(function() {
    stacks = new ThreeStacks();
    stacks.push(0, 1);
    stacks.push(0, 2);
    stacks.push(0, 3);
    stacks.push(1, 4);
    stacks.push(1, 5);
    stacks.push(1, 6);
    stacks.push(2, 7);
    stacks.push(2, 8);
    stacks.push(2, 9);
  });
  it('should handle "peek" for all the 3 stacks', function() {
    stacks.peek(0).should.be.exactly(3);
    stacks.peek(0).should.be.exactly(3);
    stacks.peek(1).should.be.exactly(6);
    stacks.peek(1).should.be.exactly(6);
    stacks.peek(2).should.be.exactly(9);
    stacks.peek(2).should.be.exactly(9);
  });
  it('should handle "pop" for all the 3 stacks', function() {
    stacks.pop(0).should.be.exactly(3);
    stacks.pop(0).should.be.exactly(2);
    stacks.pop(1).should.be.exactly(6);
    stacks.pop(1).should.be.exactly(5);
    stacks.pop(2).should.be.exactly(9);
    stacks.pop(2).should.be.exactly(8);
  });
  it('should handle "isEmpty" for all the 3 stacks', function() {
    stacks.isEmpty(0).should.be.exactly(false);
    stacks.isEmpty(1).should.be.exactly(false);
    stacks.isEmpty(2).should.be.exactly(false);
    stacks.pop(0);
    stacks.pop(0);
    stacks.pop(0);
    stacks.pop(1);
    stacks.pop(1);
    stacks.pop(1);
    stacks.pop(2);
    stacks.pop(2);
    stacks.pop(2);
    stacks.isEmpty(0).should.be.exactly(true);
    stacks.isEmpty(1).should.be.exactly(true);
    stacks.isEmpty(2).should.be.exactly(true);
  });
});