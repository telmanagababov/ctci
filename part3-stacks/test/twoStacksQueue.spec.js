const assert = require('assert');
const should = require('should');
const TwoStacksQueue = require('../src/twoStacksQueue');

describe('twoStacksQueue', function() {
  let queue = null;
  beforeEach(function() {
    queue = new TwoStacksQueue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    queue.add(4);
  });
  it('should handle "peek"', function() {
    queue.peek().should.be.exactly(1);
  });
  it('should handle "remove"', function() {
    queue.remove().should.be.exactly(1);
    queue.remove().should.be.exactly(2);
  });
  it('should handle "peek/remove"', function() {
    queue.peek().should.be.exactly(1);
    queue.remove().should.be.exactly(1);
    queue.peek().should.be.exactly(2);
    queue.remove().should.be.exactly(2);
  });
  it('should handle "peek/add"', function() {
    queue.peek().should.be.exactly(1);
    queue.add(5);
    queue.peek().should.be.exactly(1);
  });
  it('should handle "isEmpty"', function() {
    queue.isEmpty().should.be.exactly(false);
    queue.remove();
    queue.remove();
    queue.remove();
    queue.remove();
    queue.isEmpty().should.be.exactly(true);
  });
});