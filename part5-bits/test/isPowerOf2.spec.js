const assert = require('assert');
const should = require('should');
const isPowerOf2 = require('../src/isPowerOf2');

describe('isPowerOf2', function() {
  it('should return true for 1', function() {
    isPowerOf2(1).should.be.exactly(true);
  });
  it('should return true for 2', function() {
    isPowerOf2(2).should.be.exactly(true);
  });
  it('should return true for 4', function() {
    isPowerOf2(4).should.be.exactly(true);
  });

  it('should return false for 3', function() {
    isPowerOf2(3).should.be.exactly(false);
  });
  it('should return false for 5', function() {
    isPowerOf2(5).should.be.exactly(false);
  });
  it('should return false for 6', function() {
    isPowerOf2(6).should.be.exactly(false);
  });
});