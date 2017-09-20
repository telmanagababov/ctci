const assert = require('assert');
const should = require('should');
const AnimalsQueue = require('../src/animalsQueue');

describe('animalsQueue', function() {
  let queue = null;
  beforeEach(function() {
    queue = new AnimalsQueue();
    queue.enqueue('cat', 'cat0');
    queue.enqueue('dog', 'dog0');
    queue.enqueue('cat', 'cat1');
    queue.enqueue('dog', 'dog1');
  });
  it('should handle "dequeueAny"', function() {
    queue.dequeueAny().should.be.exactly('cat0');
    queue.dequeueAny().should.be.exactly('dog0');
  });
  it('should handle "dequeueDog"', function() {
    queue.dequeueDog().should.be.exactly('dog0');
    queue.dequeueDog().should.be.exactly('dog1');
  });
  it('should handle "dequeueCat"', function() {
    queue.dequeueCat().should.be.exactly('cat0');
    queue.dequeueCat().should.be.exactly('cat1');
  });
  it('should handle "enqueue/dequeue"', function() {
    queue.dequeueAny().should.be.exactly('cat0');
    queue.enqueue('dog', 'dog2');
    queue.enqueue('cat', 'cat2');
    queue.dequeueAny().should.be.exactly('dog0');
    queue.dequeueDog().should.be.exactly('dog1');
    queue.dequeueCat().should.be.exactly('cat1');
  });
});