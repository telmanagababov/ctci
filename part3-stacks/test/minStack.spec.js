const assert = require('assert');
const should = require('should');
const MinStack = require('../src/minStack');

describe('minStack', function() {
  let stack = null;
  beforeEach(function() {
    stack = new MinStack();
    stack.push(10);
    stack.push(20);
    stack.push(40);
    stack.push(15);
    stack.push(5);
    stack.push(50);
    stack.push(75);
    stack.push(1);
    stack.push(115);
    stack.push(35);
  });
  it('should handle "min" correctly', function() {
    stack.min().should.be.exactly(1);
  });
  it('should handle "pop" correctly', function() {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.min().should.be.exactly(5);
  });
  it('should handle "push" correctly', function() {
    stack.push(0);
    stack.min().should.be.exactly(0);
  });
  it('should handle "push/pop" correctly', function() {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.push(100);
    stack.push(3);
    stack.push(250);
    stack.push(80);
    stack.pop();
    stack.min().should.be.exactly(3);
  });
});