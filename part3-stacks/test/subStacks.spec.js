const assert = require('assert');
const should = require('should');
const SubStacks = require('../src/subStacks');

describe('subStacks', function() {
  let stack = null;
  beforeEach(function() {
    stack = new SubStacks(4);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.push(8);
    stack.push(9);
    stack.push(10);
  });
  it('should handle "peek"', function() {
    stack.peek().should.be.exactly(10);
  });
  it('should handle "pop"', function() {
    stack.pop().should.be.exactly(10);
    stack.pop().should.be.exactly(9);
    stack.pop().should.be.exactly(8);
  });
  it('should handle "peek/pop"', function() {
    stack.peek().should.be.exactly(10);
    stack.pop().should.be.exactly(10);
    stack.peek().should.be.exactly(9);
    stack.pop().should.be.exactly(9);
  });
  it('should handle "popAt"', function() {
    stack.popAt(0).should.be.exactly(4);
    stack.popAt(1).should.be.exactly(8);
  });
  it('should handle "popAt/push"', function() {
    stack.push(11);
    stack.push(12);
    stack.popAt(0).should.be.exactly(4);
    stack.push(13);
    stack.popAt(3).should.be.exactly(13);
    stack.popAt(2).should.be.exactly(12);
  });
  it('should handle "isEmpty"', function() {
    stack.isEmpty().should.be.exactly(false);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.isEmpty().should.be.exactly(true);
  });
});