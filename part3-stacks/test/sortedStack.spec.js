const assert = require('assert');
const should = require('should');
const SortedStack = require('../src/sortedStack');

describe('sortedStack', function() {
  let stack = null;
  beforeEach(function() {
    stack = new SortedStack();
    stack.push(4);
    stack.push(3);
    stack.push(2);
    stack.push(1);
  });
  it('should handle "peek"', function() {
    stack.peek().should.be.exactly(1);
  });
  it('should handle "pop"', function() {
    stack.pop().should.be.exactly(1);
    stack.pop().should.be.exactly(2);
  });
  it('should handle "peek/pop"', function() {
    stack.peek().should.be.exactly(1);
    stack.pop().should.be.exactly(1);
    stack.peek().should.be.exactly(2);
    stack.pop().should.be.exactly(2);
  });
  it('should handle "peek/push"', function() {
    stack.peek().should.be.exactly(1);
    stack.push(10);
    stack.peek().should.be.exactly(1);
    stack.push(0);
    stack.peek().should.be.exactly(0);
  });
  it('should handle "isEmpty"', function() {
    stack.isEmpty().should.be.exactly(false);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.isEmpty().should.be.exactly(true);
  });
});